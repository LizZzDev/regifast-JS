import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    iniciarSesion,
    crearUsuario,
    cerrarSesion
} from '../controladores/usuarios/index.js';

const router = express.Router();

router.post('/iniciarSesion', iniciarSesion);
router.post('/crearUsuario', crearUsuario);
router.post('/cerrarSesion', cerrarSesion);

export default router;