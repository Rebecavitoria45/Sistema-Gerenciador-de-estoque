const express = require('express')
const bodyParser = require('body-parser')
const produtoRouter = require('./routers/ProdutoRouter')
const clienteRouter=require('./routers/ClienteRouter')
const pedidoRouter=require('./routers/PedidoRouter')
const detalhePedidoRouter = require('./routers/DetalhePedidoRouter')
const usuarioRouter= require('./routers/UsuarioRouter')
const categoriaRouter = require('./routers/CategoriaRouter')
const sequelize = require('./database/config')
const Cliente = require('./model/Cliente');
const Produto = require('./model/Produto');
const Pedido = require('./model/Pedido');
const DetalhePedido = require('./model/DetalhePedido');
const Usuario = require('./model/Usuario')
const Categoria = require('./model/Categoria')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
require('dotenv').config();

// Associar as models
Cliente.associate({ Pedido });
Produto.associate({ Pedido, DetalhePedido,Categoria });
Pedido.associate({ Cliente, Produto, DetalhePedido });

module.exports = { Cliente, Produto, Pedido, DetalhePedido,Produto, Usuario, Categoria };


const app = express();
app.use(bodyParser.json());
app.use(produtoRouter);
app.use(clienteRouter);
app.use(pedidoRouter);
app.use(detalhePedidoRouter);
app.use(usuarioRouter);
app.use(categoriaRouter)
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const startServer = async()=>{
    try{
        sequelize.sync({ alter: true })
       
        console.log('Banco de dados conectado.');
        app.listen(process.env.PORT || 3000,()=>{
            console.log('Servidor rodando na porta 3000');

        });}
        catch(error){
         console.error('Error ao conectar ao banco de dados',error)
        }
    }

    startServer();

