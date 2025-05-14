import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import subirArchivo from '../middlewares/subirImagen.js';
import { 
    obtenerEmpresas,
    obtenerEmpresa,
    crearEmpresa
} from '../controladores/empresas/index.js';

const router = express.Router();

router.get('/obtenerEmpresas', obtenerEmpresas);
router.get('/obtenerEmpresa', obtenerEmpresa);
router.post('/crearEmpresa',  subirArchivo.single('imagen'), crearEmpresa);

export default router;