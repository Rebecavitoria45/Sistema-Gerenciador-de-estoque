const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sge','user','password',{
    host:'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
