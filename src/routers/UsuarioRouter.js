const express = require('express')
const router = express.Router();
const usuarioController = require('../controller/UsuarioController')
const verificaToken = require('../middleware/VerificarToken')

router.post('/cadastrarusuario', usuarioController.cadastrarUsuario)
router.post('/loginusuario', usuarioController.loginUsuario)


module.exports = router;