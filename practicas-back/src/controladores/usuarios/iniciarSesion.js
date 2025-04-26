import bcrypt from 'bcrypt';
import Usuario from '../../modelos/modeloUsuario.js';

const iniciarSesion = async (req) => {
  const { Correo, Contrasena } = req;
  const user = await Usuario.buscarPorCorreo(Correo.trim());

  if (!user) {
    throw new Error("Usuario no encontrado.");
  }

  const match = await bcrypt.compare(Contrasena.trim(), user.Contrasena);

  if (!match) {
    throw new Error("Datos incorrectos.");
  }

  return {
    id: user.IdUsuario,
    nombre: user.Nombre,
    correo: user.Correo,
  };
};

export default iniciarSesion;