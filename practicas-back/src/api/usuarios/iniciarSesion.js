const bcrypt = require('bcrypt');
const Usuario = require('../../modelos/usuarios/modeloUsuario'); 

const iniciarSesion = async (correo, contrasena) => {  
  const user = await Usuario.buscarPorCorreo(correo.trim());
    
  if (!user) {
    throw new Error("Usuario no encontrado.");
  }

  const match = await bcrypt.compare(contrasena.trim(), user.Contrasena);

  if (!match) {
    throw new Error("Datos incorrectos.");
  } 

  return {
    id: user.IdUsuario,
    nombre: user.Nombre,
    correo: user.Correo,
    rol: user.Rol
  };

};

module.exports = iniciarSesion;