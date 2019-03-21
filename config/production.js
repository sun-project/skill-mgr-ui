const { Eureka } = require('eureka-js-client')
const {
  hostName,
  localAddress,
  contextPath,
  eurekaHost,
  eurekaPort,
  eurekaPath
} = require('./env')

const eurekaConfig = {
  instance: {
    app: 'skillMgrUi',
    hostName: hostName,
    ipAddr: localAddress,
    instanceId: `${hostName}:skillMgrUi:3000`,
    statusPageUrl: `http://${hostName}:3000${contextPath}/api/info`,
    healthCheckUrl: `http://${hostName}:3000${contextPath}/api/health`,
    port: {
      $: 3000,
      '@enabled': 'true'
    },
    vipAddress: 'skillMgrUi',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn'
    }
  },
  eureka: {
    host: eurekaHost,
    port: eurekaPort,
    servicePath: eurekaPath,
    maxRetries: 20,
    requestRetryDelay: 5000
  }
}

const eurekaClient = new Eureka(eurekaConfig)

const eurekaRouter = vipAddress => {
  let seq = 0
  return req => {
    const instances = eurekaClient
      .getInstancesByVipAddress(vipAddress)
      .filter(i => i.status === 'UP')

    const selectedInstance = instances[seq++ % instances.length]

    const ipAddr = selectedInstance.ipAddr
    const port =
      typeof selectedInstance.port === 'number'
        ? selectedInstance.port
        : selectedInstance.port.$ || selectedInstance.port.port

    return `http://${ipAddr}:${port}`
  }
}

module.exports = {
  express: {
    onStart: () => {
      eurekaClient.start()
    },

    onShutdown: (server, callback) => {
      eurekaClient.stop(callback)
    }
  },

  axios: {
    proxy: true
  },

  proxy: {
    '/skillmgr/api/': {
      target: 'http://localhost:8080',
      router: eurekaRouter('gateway')
    }
  }
}
