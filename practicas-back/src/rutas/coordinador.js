import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { verificarSesion } from '../middlewares/verificarSesion.js';
import { soloCoordinador } from '../middlewares/verificarRol.js';
import subirArchivo from '../middlewares/subirImagen.js';
import { 
    asignarFechaIngresoPorCalificaciones,
    anadirEmpresa,
    modificarDatosDelAlumno,
    obtenerAlumnos,
    obtenerAlumno, 
    validarAlumno,
    revertirValidacionAlumno,
    validarEmpresa,
    obtenerBarraStatusParaEstadisticas,
    obtenerNumeroAlumnos,
    eliminarAlumno
} from '../controladores/coordinador/index.js';

const router = express.Router();

router.get('/obtenerAlumnos', obtenerAlumnos);
router.get('/obtenerAlumno', obtenerAlumno);
router.get('/obtenerBarraStatusParaEstadisticas', obtenerBarraStatusParaEstadisticas);
router.get('/obtenerNumeroAlumnos', obtenerNumeroAlumnos);
router.post('/eliminarAlumno', verificarSesion, soloCoordinador, eliminarAlumno);
router.post('/anadirEmpresa', verificarSesion, subirArchivo.single('imagen'), anadirEmpresa);
router.put('/asignarFechaIngresoPorCalificaciones', verificarSesion, soloCoordinador, asignarFechaIngresoPorCalificaciones);
router.put('/modificarDatosAlumno', modificarDatosDelAlumno);
router.put('/validarAlumno', verificarSesion, soloCoordinador, validarAlumno);
router.put('/revertirValidacionAlumno', verificarSesion, soloCoordinador, revertirValidacionAlumno);
router.put('/validarEmpresa', verificarSesion, validarEmpresa);

export default router;