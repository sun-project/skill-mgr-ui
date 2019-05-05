module.exports = {
  axios: {
    proxy: true
  },

  proxy: {
    '/skillmgr/api/': {
      target: 'http://localhost:8081',
      onProxyReq(proxyReq, req, res) {
        proxyReq.setHeader('X_GATEWAY_USER_ID', 'tmiyajima')
      }
    }
  }
}
