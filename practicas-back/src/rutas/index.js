import express from 'express';
import usuarios from './usuarios.js';
import alumnos from './alumnos.js';
import empresas from './empresas.js';


const router = express.Router();

router.use('/usuarios', usuarios);
router.use('/alumnos', alumnos);
router.use('/empresas', empresas);

export default router;