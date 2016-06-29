// Hostname helper
const _getHost = (source) => process.env[`${source}_host`] || localhost;

module.exports = {
  db: {
    host: _getHost('db')
  },
  api: {
    host: _getHost('api')
  }
}
