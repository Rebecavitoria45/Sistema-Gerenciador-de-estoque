const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Usuario = sequelize.define('Usuario', {
  usuario_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senhaHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  tableName: 'Usuario',  // Nome explícito da tabela
})


module.exports = Usuario;