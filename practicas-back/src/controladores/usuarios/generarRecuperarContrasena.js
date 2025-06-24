import Token from '../../modelos/modeloToken.js';
import crypto from 'crypto';
import { PORT, RUTA } from './configuracion/constantes.js';
import enviarCorreo from '../../utils/enviarCorreo.js';
import Usuario from '../../modelos/modeloUsuario.js';

const generarTokenRecuperarContrasena = async (req) => {
    try {
        const { correo } = req;

         const usuarioExistente = await Usuario.buscarPorCorreo(correo);

        if (!usuarioExistente) {
        throw new Error("El correo no está registrado.");
        }

        const tokenGenerado = crypto.randomBytes(10).toString('hex');
        const fechaExpiracion = new Date(Date.now() + 5 * 60 * 1000); 

        await Usuario.guardarTokenRecuperarContrasena(tokenGenerado, fechaExpiracion, correo);

       const enlace = `${RUTA}5173/recuperar?token=${tokenGenerado}`;
        
        await enviarCorreo({
            email: correo,
            subject: 'Recuperar contraseña',
            text: `Si deseas recuperar tu cuenta ingresa a ${enlace}`,
        });

        return {
            enlace: enlace, 
            token: tokenGenerado,
            fechaExpiracion
        };
    } catch (error) {
        console.error("Error al generar token para recuperar contraseña:", error);
        throw error;
        
    }
};

export default generarTokenRecuperarContrasena;


