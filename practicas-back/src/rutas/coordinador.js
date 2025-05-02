import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    modificarDatosAlumno,
    obtenerAlumnos,
    obtenerAlumno, 
} from '../controladores/coordinador/index.js';

const router = express.Router();

router.get('/obtenerAlumnos', obtenerAlumnos);
router.get('/obtenerAlumno', obtenerAlumno);
router.put('/modificarDatosAlumno', modificarDatosAlumno);

export default router;