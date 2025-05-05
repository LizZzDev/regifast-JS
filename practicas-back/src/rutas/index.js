import express from 'express';
import usuarios from './usuarios.js';
import alumnos from './alumnos.js';
import empresas from './empresas.js';
import coordinador from './coordinador.js';

const router = express.Router();

router.use('/usuarios', usuarios);
router.use('/coordinador', coordinador);
router.use('/alumnos', alumnos);
router.use('/empresas', empresas);

//añadir validacion joi

export default router;