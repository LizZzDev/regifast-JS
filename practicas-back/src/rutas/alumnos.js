import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    anadirDatosDelAlumno,
} from '../controladores/alumnos/index.js';

const router = express.Router();

router.post('/anadirDatosDelAlumno', anadirDatosDelAlumno);

export default router;