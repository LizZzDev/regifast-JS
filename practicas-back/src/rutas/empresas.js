import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    obtenerEmpresasConVacantes,
    obtenerTodas,
} from '../controladores/empresas/index.js';

const router = express.Router();

router.get('/obtenerEmpresasConVacantes', obtenerEmpresasConVacantes);
router.get('/obtenerTodas', obtenerTodas);

export default router;