module.exports = {
  axios: {
    proxy: true
  },

  proxy: {
    '/skillmgr/api/': {
      target: 'http://sunapp.mydns.jp'
    }
  }
}
