const {DataTypes} = require('sequelize');
const sequelize = require('../database/config');

const Produto = sequelize.define('Produto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
       type:DataTypes.STRING,
       allowNull:false,
    },

    preco:{
        type:DataTypes.DECIMAL,
        allowNull:false,
    }
})


Produto.associate = (models) => {
    // Relacionamento muitos-para-muitos entre Produto e Pedido através de DetalhePedido
    Produto.belongsToMany(models.Pedido, {
      through: models.DetalhePedido,
      foreignKey: 'id_produto',
      otherKey: 'id_pedido',
      as: 'pedidos',
    });
  };

module.exports = Produto;