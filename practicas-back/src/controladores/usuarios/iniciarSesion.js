import bcrypt from 'bcrypt';
import Usuario from '../../modelos/modeloUsuario.js';

const iniciarSesion = async (req) => {
  console.log ("entro a iniciarSesion.js", req);
  const { correo, contrasena } = req;
  const user = await Usuario.buscarPorCorreo(correo.trim());

  if (!user) {
    throw new Error("Usuario no encontrado.");
  }

  const match = await bcrypt.compare(contrasena.trim(), user.Contrasena);

  if (!match) {
    throw new Error("Datos incorrectos.");
  }

  console.log(user);
  return {
    id: user.IdUsuario,
    nombre: user.Nombre,
    correo: user.Correo,
  };
};

export default iniciarSesion;