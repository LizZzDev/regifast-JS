const express = require('express');
const router = express.Router();
const { 
    iniciarSesion,

} = require('../alumnos/index');

router.post('/iniciarSesion', iniciarSesion);

module.exports = router;