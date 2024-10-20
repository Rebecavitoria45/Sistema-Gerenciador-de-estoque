const express = require('express')
const router = express.Router();
const DetalhePedidoController = require('../controller/DetalhePedidoController')

router.post('/detalhePedidos', DetalhePedidoController.criarDetalhePedido)
router.get('/detalhePedidos', DetalhePedidoController.todosDetalhePedidos)
router.put('/detalhePedidos/:id_detalhePedido',DetalhePedidoController.alterarDetalhePedido)
router.delete('/detalhePedidos/:id_detalhePedido', DetalhePedidoController.excluirDetalhePedido)

module.exports = router;