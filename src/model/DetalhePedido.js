const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const DetalhePedido = sequelize.define('DetalhePedido', {
  id_detalhePedido: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_pedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Pedido',
      key: 'id',
    },
  },
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Produto',
      key: 'id',
    },
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  desconto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
},{
  tableName: 'DetalhePedido',  // Nome explícito da tabela
});

module.exports = DetalhePedido;
