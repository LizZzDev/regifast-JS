import Token from '../../modelos/modelotoken.js';

// console.log('[DEBUG] Métodos de Token:', Object.keys(Token)); 

// const generarToken = async (req, res) => {
//     try { 
//         const { correo: IdUsuario } = req.body;

//         const tokenGenerado = crypto.randomBytes(32).toString('hex');
//         const fechaCreacion = new Date();
//         const fechaExpiracion = new Date(fechaCreacion.getTime() + 5 * 60 * 1000);

//         await Token.guardarToken(tokenGenerado, IdUsuario, fechaCreacion, fechaExpiracion);
        
//         res.json({
//             token: tokenGenerado,
//             expiracion: fechaExpiracion,
//             creacion: fechaCreacion
//         });

//     } catch (error) {
//         console.error('[ERROR DETALLADO]', error.message, error.stack);
//         res.status(500).json({ 
//             error: 'Error interno',
//             detalle: error.message // Ahora verás el error real
//         });
//     }
// };

// export default generarToken;



import express from 'express';
import crypto from 'crypto';
import enviarCorreo from '../../utils/enviarCorreo.js';


const generarToken = async (req, res) => {
    try {
        const { correo } = req.body;

        if (!correo) {
            return res.status(400).json({ error: 'Correo es requerido' });
        }

        const tokenGenerado = crypto.randomBytes(32).toString('hex');
        const fechaCreacion = new Date();
        const fechaExpiracion = new Date(fechaCreacion.getTime() + 5 * 60 * 1000);

        // Asegúrate que Token.guardarToken exista como método
        await Token.guardarToken(tokenGenerado, fechaCreacion, fechaExpiracion);
        
        await enviarCorreo({
            email: correo,
            subject: 'Token de autenticación',
            text: `Tu token es: ${tokenGenerado}`,
            token: tokenGenerado
        });

        res.json({
            token: tokenGenerado,
            fechaCreacion,
            fechaExpiracion
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: 'No se pudo generar el token',
            message: error.message
        });
        
    }
};

export default generarToken;


