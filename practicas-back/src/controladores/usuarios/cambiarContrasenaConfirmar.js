import Usuario from "../../modelos/modeloUsuario.js";
import bcrypt from "bcrypt";

const restablecerContrasena = async (req) => {
  const {token, nuevaContrasena} = req.body;

  try {
        console.log (token, nuevaContrasena);

    const hash = await bcrypt.hash(nuevaContrasena, 10); 

    console.log ("hi");

    const rol = await Usuario.buscarPorToken (token);

    console.log (token)
    console.log (rol)

    const fueRestablecida = await Usuario.restablecerContrasenaPorToken(hash, token);

    if (!fueRestablecida) {
      throw new Error("Token inválido o expirado.");
    }

    return { mensaje: "Contraseña restablecida correctamente.", success: true, rol: rol};
  } catch (error) {
    throw error;
  }
};

export default restablecerContrasena;