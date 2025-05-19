import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { verificarSesion } from '../middlewares/verificarSesion.js';
import { soloAlumno } from '../middlewares/verificarRol.js';
import accesoPorCalificacion from '../middlewares/accesoPorFechaYCalificacion .js';

import { 
    anadirDatosDelAlumno,
    obtenerBarraStatus,
    postularOfertaEmpresa,
    calificarEmpresa,
    obtenerCalificacionesDeLasEmpresas,
    mostrarEmpresaSeleccionada,
    generarCartaAsignacion,
    obtenerEmpresasAlumnos,
    obtenerEmpresaParaUsuario
} from '../controladores/alumnos/index.js';

const router = express.Router();

router.get('/obtenerBarraStatus', verificarSesion, soloAlumno, obtenerBarraStatus);
router.get('/mostrarEmpresaSeleccionada', mostrarEmpresaSeleccionada);
router.get('/obtenerCalificarEmpresa', obtenerCalificacionesDeLasEmpresas);
router.get('/obtenerEmpresasAlumnos', verificarSesion, soloAlumno, accesoPorCalificacion, obtenerEmpresasAlumnos);
router.get('/generarCartaAsignacion', verificarSesion, soloAlumno, generarCartaAsignacion);
router.get('/obtenerEmpresaParaUsuario', verificarSesion, soloAlumno, obtenerEmpresaParaUsuario);
router.post('/calificarEmpresa', verificarSesion, soloAlumno, calificarEmpresa);
router.post('/anadirDatosDelAlumno', verificarSesion, soloAlumno, anadirDatosDelAlumno);
router.put('/postularOfertaEmpresa', verificarSesion,  soloAlumno, postularOfertaEmpresa);


export default router;