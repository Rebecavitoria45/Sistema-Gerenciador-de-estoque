const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Categoria',
      key: 'id',
    }
  }
},{
  tableName: 'Produto',  // Nome explícito da tabela
});

// Relacionamento muitos-para-muitos entre Produto e Pedido através de DetalhePedido
Produto.associate = (models) => {
  Produto.belongsToMany(models.Pedido, {
    through: models.DetalhePedido,
    foreignKey: 'id_produto',
    otherKey: 'id_pedido',
    as: 'pedidos',
  });

  Produto.belongsTo(models.Categoria, {
    foreignKey: 'id_categoria',
    as: 'categoria'
  });
};

module.exports = Produto;
