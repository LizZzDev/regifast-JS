import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { verificarSesion } from '../middlewares/verificarSesion.js';
import { soloCoordinador } from '../middlewares/verificarRol.js';
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
router.post('/anadirEmpresa', verificarSesion, soloCoordinador, anadirEmpresa);
router.put('/asignarFechaIngresoPorCalificaciones', verificarSesion, soloCoordinador, asignarFechaIngresoPorCalificaciones);
router.put('/modificarDatosAlumno', modificarDatosDelAlumno);
router.put('/validarAlumno', verificarSesion, soloCoordinador, validarAlumno);
router.put('/validarEmpresa', verificarSesion, validarEmpresa);

export default router;