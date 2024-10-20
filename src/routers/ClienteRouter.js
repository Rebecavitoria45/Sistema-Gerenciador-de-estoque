const express = require('express')
const router = express.Router();
const clienteController = require('../controller/ClienteController')

router.post('/clientes', clienteController.criarCliente)
router.get('/clientes', clienteController.todosClientes)
router.put('/clientes/:cliente_id',clienteController.alterarCliente)
router.delete('/clientes/:cliente_id', clienteController.excluirCliente)

module.exports = router;