require('dotenv').config();

const config = {
  port: process.env.PORT,
  database: process.env.DATABASE,
  dbUsername: process.env.DB_USERNAME,
  dbHost: process.env.DB_HOST,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: process.env.DB_PORT,
  dbDialect: process.env.DB_DIALECT,
};

module.exports = config;
