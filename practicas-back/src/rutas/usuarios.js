import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    iniciarSesion,
    crearUsuario,
    cerrarSesion,
    generarToken, 
    validarToken
} from '../controladores/usuarios/index.js';

const router = express.Router();

router.post('/iniciarSesion', iniciarSesion);
router.post('/crearUsuario', crearUsuario);
router.post('/cerrarSesion', cerrarSesion);
router.post('/generarToken', generarToken);
router.post('/validarToken', validarToken);


export default router;