import bcrypt from 'bcrypt';
import Usuario from '../../modelos/modeloUsuario.js';

const iniciarSesion = async (req) => {
  const { correo, contrasena, rol } = req;
  const user = await Usuario.buscarPorCorreo(correo.trim());

  if (!user) {
    throw new Error("Usuario o contraseña incorrectos");
  }

  const match = await bcrypt.compare(contrasena.trim(), user.Contrasena);

  if (!match) {
    throw new Error("Usuario o contraseña incorrectos");
  }

  console.log ("ok");

  return {
    id: user.IdUsuario,
    nombre: user.Nombre,
    correo: user.Correo,
    rol: user.Rol,
  };
};

export default iniciarSesion;