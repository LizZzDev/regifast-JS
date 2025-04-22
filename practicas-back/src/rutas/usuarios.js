const express = require('express');
const router = express.Router();
const validarCampos = require('../middlewares/validarCampos');
const { 
    iniciarSesion,
    crearUsuario,
    cerrarSesion
} = require('../controladores/usuarios/index');

router.post('/iniciarSesion', validarCampos(), iniciarSesion);
router.post('/crearUsuario', validarCampos(), crearUsuario);
router.post('/cerrarSesion', cerrarSesion);

module.exports = router;