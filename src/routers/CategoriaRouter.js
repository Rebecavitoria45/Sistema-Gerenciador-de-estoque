const express = require('express')
const router = express.Router();
const categoriaController = require('../controller/CategoriaController')
const verificaToken = require('../middleware/VerificarToken')

router.post('/categorias', verificaToken, categoriaController.criarCategoria)
router.get('/categorias', verificaToken, categoriaController.todasCategorias)
router.put('/categorias/:id',verificaToken, categoriaController.alterarCategoria)
router.delete('/categorias/:id', verificaToken, categoriaController.excluirCategoria)

module.exports = router;