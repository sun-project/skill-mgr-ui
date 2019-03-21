const os = require('os')

function getLocalAddress() {
  const interfaces = os.networkInterfaces()
  for (const dev in interfaces) {
    const details = interfaces[dev]
    for (let i = 0; i < details.length; i++) {
      const detail = details[i]
      if (!detail.internal && detail.family === 'IPv4') {
        return detail.address
      }
    }
  }
}

module.exports = {
  hostName: os.hostname(),
  localAddress: getLocalAddress(),
  contextPath: process.env.CONTEXT_PATH || '/skillmgr/ui',
  eurekaHost: process.env.EUREKA_HOST || 'localhost',
  eurekaPort: process.env.EUREKA_PORT || 8761,
  eurekaPath: process.env.EUREKA_PATH || '/eureka/apps/'
}
