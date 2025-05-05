import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    modificarDatosDelAlumno,
    obtenerAlumnos,
    obtenerAlumno, 
    validarAlumno,
    validarEmpresa,
    obtenerBarraStatusParaEstadisticas
} from '../controladores/coordinador/index.js';

const router = express.Router();

router.get('/obtenerAlumnos', obtenerAlumnos);
router.get('/obtenerAlumno', obtenerAlumno);
router.get('/obtenerBarraStatusParaEstadisticas', obtenerBarraStatusParaEstadisticas);
router.put('/modificarDatosAlumno', modificarDatosDelAlumno);
router.put('/validarAlumno', validarAlumno);
router.put('/validarEmpresa', validarEmpresa);

export default router;