import Usuario from "../modelos/modeloUsuario.js";
import bcrypt from "bcrypt";

const restablecerContrasena = async (req) => {
    const {token, nuevaContrasena} = req.body;
  try {
    const hash = await bcrypt.hash(nuevaContrasena, 10); // Encripta la nueva contraseña

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