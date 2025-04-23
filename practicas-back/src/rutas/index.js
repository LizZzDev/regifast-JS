import express from 'express';
import usuarios from './usuarios.js';
import alumnos from './alumnos.js';


const router = express.Router();

router.use('/usuarios', usuarios);
router.use('/alumnos', alumnos);

export default router;