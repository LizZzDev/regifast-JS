import express from 'express';
import validarCampos from '../middlewares/validarCampos.js';
import { 
    iniciarSesion,
    crearUsuario,
    cerrarSesion,
    generarToken, 
    validarToken,
    generarTokenRecuperarContrasena, 
    verificarSesion,
    cambiarContrasenaConfirmar,
    obtenerSiHayToken
} from '../controladores/usuarios/index.js';

const router = express.Router();

router.get('/verificarSesion', verificarSesion);
router.get('/obtenerSiHayToken', obtenerSiHayToken);
router.post('/iniciarSesion', iniciarSesion);
router.post('/crearUsuario', crearUsuario);
router.post('/cerrarSesion', cerrarSesion);
router.post('/generarToken', generarToken);
router.post('/generarTokenRecuperarContrasena', generarTokenRecuperarContrasena);
router.post('/validarToken', validarToken);
router.put('/restablecerContrasena', cambiarContrasenaConfirmar);

export default router;