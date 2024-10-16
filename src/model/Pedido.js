const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dataCompra: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false, 
  },
});

// Associação entre Pedido e Cliente
Pedido.associate = (models) => {
  Pedido.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente' });
    // Relacionamento muitos-para-muitos entre Pedido e Produto através de DetalhePedido
    Pedido.belongsToMany(models.Produto, {
        through: models.DetalhePedido,
        foreignKey: 'id_pedido',
        otherKey: 'id_produto',
        as: 'produtos',
      });
};

module.exports = Pedido;
