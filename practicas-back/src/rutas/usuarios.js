import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    iniciarSesion,
    crearUsuario,
    cerrarSesion
} from '../controladores/usuarios/index.js';
// otro cambio mio
import generarToken from '../controladores/usuarios/generarToken.js';

const router = express.Router();

router.post('/iniciarSesion', iniciarSesion);
router.post('/crearUsuario', crearUsuario);
router.post('/cerrarSesion', cerrarSesion);
// cmabio de richi
router.post('/generarToken', generarToken);

export default router;