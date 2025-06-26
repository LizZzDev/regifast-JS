import Usuario from "../../modelos/modeloUsuario.js";
import bcrypt from "bcrypt";

const restablecerContrasena = async (req) => {
    const {token, nuevaContrasena} = req;
  try {
    const hash = await bcrypt.hash(nuevaContrasena, 10); 

    const fueRestablecida = await Usuario.restablecerContrasenaPorToken(hash, token);

    if (!fueRestablecida) {
      throw new Error("Token inválido o expirado.");
    }

    return { mensaje: "Contraseña restablecida correctamente." };
  } catch (error) {
    throw error;
  }
};

export default restablecerContrasena;