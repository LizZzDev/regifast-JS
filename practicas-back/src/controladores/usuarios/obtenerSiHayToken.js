import Usuario from '../../modelos/modeloUsuario.js';

const obtenerSiHayToken = async (req) => {
  const { token } = req.query;

  try {
    const hoy = new Date();
    const usuario = await Usuario.buscarPorToken(token); 

    if (!usuario) {
      return { valido: false, mensaje: "Token no encontrado" };
    }

    if (usuario.expiracion < hoy) {
      return { valido: false, mensaje: "Token expirado" };
    }

    return { valido: true, mensaje: "Token válido" };
  } catch (error) {
    console.error("Error al verificar token:", error);
    throw new Error("Error interno al verificar token.");
  }
};

export default obtenerSiHayToken;