const Sequelize = require('sequelize');
const config = require('../config/config').development;

module.exports = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});