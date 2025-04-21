const express = require('express');
const router = express.Router();
const { 
    iniciarSesion,

} = require('../usuarios/index');

router.post('/iniciarSesion', iniciarSesion);

module.exports = router;