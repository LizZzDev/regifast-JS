import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    asignarFechaIngresoPorCalificaciones,
    anadirEmpresa,
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
router.post('/anadirEmpresa', anadirEmpresa);
router.put('/asignarFechaIngresoPorCalificaciones', asignarFechaIngresoPorCalificaciones);
router.put('/modificarDatosAlumno', modificarDatosDelAlumno);
router.put('/validarAlumno', validarAlumno);
router.put('/validarEmpresa', validarEmpresa);

export default router;