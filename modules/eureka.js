const Eureka = require('eureka-js-client').Eureka

module.exports = function EurekaModule(moduleOptions) {
  const options = Object.assign({}, this.options.eureka, moduleOptions)
  const eureka = new Eureka(options)

  this.nuxt.hook('ready', nuxt => {
    return new Promise((resolve, reject) => {
      eureka.start(err => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  })

  this.nuxt.hook('close', (nuxt, cb) => {
    return new Promise((resolve, reject) => {
      eureka.stop(err => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  })
}
