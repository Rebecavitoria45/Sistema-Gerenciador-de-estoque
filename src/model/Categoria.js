const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
},{
  tableName: 'Categoria',  // Nome explícito da tabela
});

Categoria.associate = (models) => {
    Categoria.hasMany(models.Produto, {
      foreignKey: 'id_categoria',
      as: 'produtos'
    });
  };

module.exports = Categoria;