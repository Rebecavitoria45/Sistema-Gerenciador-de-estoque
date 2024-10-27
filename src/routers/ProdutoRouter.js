const express = require('express');
const router = express.Router();
const produtoController = require('../controller/ProdutoController')
const verificaToken = require('../middleware/VerificarToken')

router.post('/produtos',verificaToken,produtoController.criarProduto)
router.get('/produtos',verificaToken,produtoController.todosProdutos)
router.put('/produtos/:id',verificaToken,produtoController.alterarProduto)
router.delete('/produtos/:id',verificaToken,produtoController.excluirProduto)

module.exports = router;