const path = require('path');

module.exports = {
  development: {
    username: 'jay_dalsaniya',
    password: '3336',
    database: 'job_board_db',
    host: 'localhost',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeData'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeData'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeData'
  }
};
