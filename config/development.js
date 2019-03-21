module.exports = {
  axios: {
    proxy: true
  },

  proxy: {
    '/skillmgr/api/': {
      target: 'http://localhost:8081'
    }
  }
}
