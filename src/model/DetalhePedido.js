const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const DetalhePedido = sequelize.define('DetalhePedido',{
    id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Pedido',
            key: 'id',
          },
       },
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Produto',
            key: 'id',
          },
       },
    quantidade:{
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    preco:{
        type: DataTypes.DECIMAL,
        allowNull: false,
        },
    desconto:{
            type: DataTypes.DECIMAL,
            allowNull: false,
            }
})


module.exports = DetalhePedido;