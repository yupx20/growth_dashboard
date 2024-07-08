const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Witel = sequelize.define('Witel', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Witel;
