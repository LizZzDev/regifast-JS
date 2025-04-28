import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    anadirDatosDelAlumno,
    modificarDatosDelAlumno,
    obtenerBarraStatus,
    postularOfertaEmpresa,
    calificarEmpresa,
    mostrarEmpresaSeleccionada

} from '../controladores/alumnos/index.js';

const router = express.Router();

router.get('/obtenerBarraStatus', obtenerBarraStatus);
router.get('/mostrarEmpresaSeleccionada', mostrarEmpresaSeleccionada);
router.post('/calificarEmpresa', calificarEmpresa);
router.post('/anadirDatosDelAlumno', anadirDatosDelAlumno);
router.put('/modificarDatosDelAlumno', modificarDatosDelAlumno);
router.put('/postularOfertaEmpresa', postularOfertaEmpresa);


export default router;