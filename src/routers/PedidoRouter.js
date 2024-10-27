const express = require('express')
const router = express.Router();
const PedidoController = require('../controller/PedidoController')
const verificaToken = require('../middleware/VerificarToken')

router.post('/pedidos', verificaToken, PedidoController.criarPedido)
router.get('/pedidos', verificaToken, PedidoController.todosPedidos)
router.put('/pedidos/:id', verificaToken,PedidoController.alterarpedido)
router.delete('/pedidos/:id', verificaToken,PedidoController.excluirPedido)

module.exports = router;