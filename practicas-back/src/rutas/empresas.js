import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    obtenerEmpresas,
    obtenerEmpresa,
} from '../controladores/empresas/index.js';

const router = express.Router();

router.get('/obtenerEmpresas', obtenerEmpresas);
router.get('/obtenerEmpresa', obtenerEmpresa);

export default router;