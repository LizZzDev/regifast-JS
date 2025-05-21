import Token from '../../modelos/modeloToken.js';


const validarToken = async (req) => {
    try {
        const { correo, token } = req;

        const tokenGuardado = await Token.obtenerTokenPorcorreo(correo);
        console.log (tokenGuardado);

        if (!tokenGuardado) {
            throw new Error("No se encontró un token para este correo.");
        }

        const ahora = new Date();
        if (ahora > new Date(tokenGuardado.fechaExpiracion)) {
            throw new Error("El token ha expirado.");
        }

        if (tokenGuardado.Token !== token) {
            await Token.aumentarIntentosToken(correo); // Sumas 1 intento
            throw new Error("Token incorrecto.");
        }

        await Token.eliminarTokenPorcorreo(correo);
        return true;
    } catch (error) {
        console.error("Error al validar token:", error);
        throw error;
        
    }
};

export default validarToken;


