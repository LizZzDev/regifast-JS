import Token from '../../modelos/modeloToken.js';
import crypto from 'crypto';
import enviarCorreo from '../../utils/enviarCorreo.js';
import Usuario from '../../modelos/modeloUsuario.js';

const validarCorreoAlumno = (correo) => {
  return correo.endsWith('@alumnos.udg.mx');
};

const generarToken = async (req) => {
    try {
        const { correo } = req;


         const usuarioExistente = await Usuario.buscarPorCorreo(correo);

        if (usuarioExistente) {
        throw new Error("El correo ya está registrado.");
        }

        if (!validarCorreoAlumno(correo)) { 
            throw new Error("El correo debe tener la terminación @alumnos.udg.mx para alumnos.");
        }
  
        const token = await Token.obtenerTokenPorcorreo(correo);

        if (token) {
            await Token.eliminarTokenPorcorreo(correo);
        }

        const tokenGenerado = crypto.randomBytes(4).toString('hex');
        const fechaCreacion = new Date();
        const fechaExpiracion = new Date(fechaCreacion.getTime() + 5 * 60 * 1000);

        await Token.guardarToken(tokenGenerado, correo, fechaCreacion, fechaExpiracion);
        
        await enviarCorreo({
            email: correo,
            subject: 'Token de autenticación',
            text: `Tu token es: ${tokenGenerado}`,
        });

        return {
            token: tokenGenerado,
            fechaCreacion,
            fechaExpiracion
        };
    } catch (error) {
        console.error("Error al generar token:", error);
        throw error;
        
    }
};

export default generarToken;


