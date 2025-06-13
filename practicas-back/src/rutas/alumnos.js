import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { verificarSesion } from '../middlewares/verificarSesion.js';
import { soloAlumno } from '../middlewares/verificarRol.js';
import accesoPorCalificacion from '../middlewares/accesoPorFechaYCalificacion.js';

import { 
    anadirDatosDelAlumno,
    postularOfertaEmpresa,
    calificarEmpresa,
    obtenerCalificacionesDeLasEmpresas,
    mostrarEmpresaSeleccionada,
    generarCartaAsignacion,
    obtenerEmpresasAlumnos,
    obtenerEmpresaParaUsuario,
    obtenerAlumnosId,
} from '../controladores/alumnos/index.js';

const router = express.Router();

router.get('/mostrarEmpresaSeleccionada', mostrarEmpresaSeleccionada);
router.get('/obtenerCalificarEmpresa', obtenerCalificacionesDeLasEmpresas);
router.get('/obtenerEmpresasAlumnos', verificarSesion, soloAlumno, accesoPorCalificacion, obtenerEmpresasAlumnos);
router.get('/generarCartaAsignacion', verificarSesion, soloAlumno, generarCartaAsignacion);
router.get('/obtenerEmpresaParaUsuario', verificarSesion, obtenerEmpresaParaUsuario);
router.post('/calificarEmpresa', verificarSesion, soloAlumno, calificarEmpresa);
router.get('/obtenerAlumnosId', verificarSesion, soloAlumno, obtenerAlumnosId);
router.post('/anadirDatosDelAlumno', verificarSesion, soloAlumno, anadirDatosDelAlumno);
router.put('/postularOfertaEmpresa', verificarSesion,  soloAlumno, accesoPorCalificacion, postularOfertaEmpresa);


export default router;