const express = require('express')
const router = express.Router();
const DetalhePedidoController = require('../controller/DetalhePedidoController')
const verificaToken = require('../middleware/VerificarToken')

router.post('/detalhePedidos', verificaToken,DetalhePedidoController.criarDetalhePedido)
router.get('/detalhePedidos', verificaToken,DetalhePedidoController.todosDetalhePedidos)
router.put('/detalhePedidos/:id_detalhePedido',verificaToken,DetalhePedidoController.alterarDetalhePedido)
router.delete('/detalhePedidos/:id_detalhePedido',verificaToken, DetalhePedidoController.excluirDetalhePedido)

module.exports = router;