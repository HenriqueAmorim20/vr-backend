const config = require('./config');

module.exports = {
  database: config.database,
  host: config.dbHost,
  username: config.dbUsername,
  password: config.dbPassword,
  dialect: config.dbDialect,
  define: {
    timestamps: true,
    underscored: true,
  }
}