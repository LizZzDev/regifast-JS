const express = require('express');
const router = express.Router();
const { 
    iniciarSesion,
    crearUsuario,
    cerrarSesion
} = require('../controladores/usuarios/index');

router.post('/iniciarSesion', iniciarSesion);
router.post('/crearUsuario', crearUsuario);
router.post('/cerrarSesion', cerrarSesion);

module.exports = router;