import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { verificarSesion } from '../middlewares/verificarSesion.js';
import subirArchivo from '../middlewares/subirImagen.js';
import { 
    obtenerEmpresas,
    obtenerEmpresa,
    crearEmpresa
} from '../controladores/empresas/index.js';

const router = express.Router();

router.get('/obtenerEmpresas', verificarSesion, obtenerEmpresas);
router.get('/obtenerEmpresa', verificarSesion, obtenerEmpresa);
router.post('/crearEmpresa',  subirArchivo.single('imagen'), crearEmpresa);

export default router;