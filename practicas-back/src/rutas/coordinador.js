import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { verificarSesion } from '../middlewares/verificarSesion.js';
import { soloCoordinador } from '../middlewares/verificarRol.js';
import subirArchivo from '../middlewares/subirImagen.js';
import { 
    asignarFechaIngresoPorCalificaciones,
    modificarDatosDelAlumno,
    obtenerAlumnos,
    obtenerAlumno, 
    validarAlumno,
    revertirValidacionAlumno,
    obtenerBarraStatusParaEstadisticas,
    obtenerNumeroAlumnos,
    eliminarAlumno,
    anadirEmpresa,
    modificarDatosEmpresa,
    validarEmpresa,
    revertirValidacionEmpresa,
    eliminarEmpresa,
} from '../controladores/coordinador/index.js';

const router = express.Router();

// === RUTAS DE ALUMNOS ===
router.get('/obtenerAlumnos', obtenerAlumnos);
router.get('/obtenerAlumno', obtenerAlumno);
router.get('/obtenerNumeroAlumnos', obtenerNumeroAlumnos);
router.get('/obtenerBarraStatusParaEstadisticas', obtenerBarraStatusParaEstadisticas);

router.put('/modificarDatosAlumno', modificarDatosDelAlumno);
router.put('/asignarFechaIngresoPorCalificaciones', verificarSesion, soloCoordinador, asignarFechaIngresoPorCalificaciones);
router.put('/validarAlumno', verificarSesion, soloCoordinador, validarAlumno);
router.put('/revertirValidacionAlumno', verificarSesion, soloCoordinador, revertirValidacionAlumno);
router.delete('/eliminarAlumno', verificarSesion, soloCoordinador, eliminarAlumno);

// === RUTAS DE EMPRESAS ===
router.post('/anadirEmpresa', verificarSesion, subirArchivo.single('imagen'), anadirEmpresa);
router.put('/modificarDatosEmpresa', modificarDatosEmpresa);
router.put('/validarEmpresa', verificarSesion, validarEmpresa);
router.put('/revertirValidacionEmpresa', revertirValidacionEmpresa);
router.delete('/eliminarEmpresa', verificarSesion, soloCoordinador, eliminarEmpresa);


export default router;