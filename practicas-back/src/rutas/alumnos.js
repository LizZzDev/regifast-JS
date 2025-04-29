import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    anadirDatosDelAlumno,
    modificarDatosDelAlumno,
    obtenerBarraStatus,
    postularOfertaEmpresa,
    calificarEmpresa,
    obtenerCalificarEmpresa,
    mostrarEmpresaSeleccionada,
    generarCartaAsignacion

} from '../controladores/alumnos/index.js';

const router = express.Router();

router.get('/obtenerBarraStatus', obtenerBarraStatus);
router.get('/mostrarEmpresaSeleccionada', mostrarEmpresaSeleccionada);
router.get('/obtenerCalificarEmpresa', obtenerCalificarEmpresa);
router.get('/generarCartaAsignacion', generarCartaAsignacion);
router.post('/calificarEmpresa', calificarEmpresa);
router.post('/anadirDatosDelAlumno', anadirDatosDelAlumno);
router.put('/modificarDatosDelAlumno', modificarDatosDelAlumno);
router.put('/postularOfertaEmpresa', postularOfertaEmpresa);


export default router;