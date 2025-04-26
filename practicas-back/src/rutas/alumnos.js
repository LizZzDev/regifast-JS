import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    anadirDatosDelAlumno,
    obtenerBarraStatus,
    aumentarBarraStatusPorId
} from '../controladores/alumnos/index.js';

const router = express.Router();

router.post('/anadirDatosDelAlumno', anadirDatosDelAlumno);
router.get('/obtenerBarraStatus', obtenerBarraStatus);
router.put('/aumentarBarraStatusPorId', aumentarBarraStatusPorId);

export default router;