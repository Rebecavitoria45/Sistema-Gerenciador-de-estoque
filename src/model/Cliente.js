const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Cliente = sequelize.define('Cliente', {
  cliente_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
},{
  tableName: 'Cliente',  // Nome explícito da tabela
});


// Associação entre Cliente e Pedido
Cliente.associate = (models) => {
  Cliente.hasMany(models.Pedido, { foreignKey: 'cliente_id', as: 'pedidos' });
};

module.exports = Cliente;
