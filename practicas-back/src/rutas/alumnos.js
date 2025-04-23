import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    añadirDatosDelAlumno,
} from '../controladores/alumnos/index.js';

const router = express.Router();

router.post('/añadirDatosDelAlumno', validarCampos, añadirDatosDelAlumno);

export default router;