const express = require('express');
const router = express.Router();

const usuarios = require('./usuarios');
const alumnos = require('./alumnos');
const jefeDepartamento = require('./jefeDepartamento');
const coordinador = require('./coordinador');
const empresas = require('./empresas');

router.post('/usuarios', usuarios);
router.post('/alumnos', alumnos);
router.post('/jefeDepartamento', jefeDepartamento);
router.post('/coordinador', coordinador);
router.post('/empresas', empresas);

module.exports = router;