const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const models = {};

// Load models dynamically
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js' && file.endsWith('.js')) // Exclude this file and only include JavaScript files
  .forEach((file) => {
    const modelDef = require(path.join(__dirname, file));
    const model = modelDef(sequelize, DataTypes);
    models[model.name] = model;
  });

// Apply associations if needed
Object.values(models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(models));

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
