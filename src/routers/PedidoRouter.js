const express = require('express')
const router = express.Router();
const PedidoController = require('../controller/PedidoController')

router.post('/pedidos', PedidoController.criarPedido)
router.get('/pedidos', PedidoController.todosPedidos)
router.put('/pedidos/:id',PedidoController.alterarpedido)
router.delete('/pedidos/:id', PedidoController.excluirPedido)

module.exports = router;