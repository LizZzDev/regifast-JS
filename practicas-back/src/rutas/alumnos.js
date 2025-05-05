import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    anadirDatosDelAlumno,
    obtenerBarraStatus,
    postularOfertaEmpresa,
    calificarEmpresa,
    obtenerCalificacionesDeLasEmpresas,
    mostrarEmpresaSeleccionada,
    generarCartaAsignacion

} from '../controladores/alumnos/index.js';

const router = express.Router();

router.get('/obtenerBarraStatus', obtenerBarraStatus);
router.get('/mostrarEmpresaSeleccionada', mostrarEmpresaSeleccionada);
router.get('/obtenerCalificarEmpresa', obtenerCalificacionesDeLasEmpresas);
router.get('/generarCartaAsignacion', generarCartaAsignacion);
router.post('/calificarEmpresa', calificarEmpresa);
router.post('/anadirDatosDelAlumno', anadirDatosDelAlumno);
router.put('/postularOfertaEmpresa', postularOfertaEmpresa);


export default router;