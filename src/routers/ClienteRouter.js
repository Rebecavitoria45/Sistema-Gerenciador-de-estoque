const express = require('express')
const router = express.Router();
const clienteController = require('../controller/ClienteController')
const verificaToken = require('../middleware/VerificarToken')

router.post('/clientes', verificaToken, clienteController.criarCliente)
router.get('/clientes', verificaToken,clienteController.todosClientes)
router.put('/clientes/:cliente_id',verificaToken,clienteController.alterarCliente)
router.delete('/clientes/:cliente_id', verificaToken,clienteController.excluirCliente)

module.exports = router;