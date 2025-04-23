import bcrypt from 'bcrypt';
import pool from '../../configuracion/db.js';
import Usuario from '../../modelos/modeloUsuario.js';
import Empresa from '../../modelos/modeloEmpresa.js';

const crearUsuario = async (req) => {
  const { correo, contrasena, nombre, rol, datosEmpresa } = req;
  const connection = await pool.getConnection();

  try {
    const usuarioExistente = await Usuario.buscarPorCorreo(correo);
    if (!usuarioExistente) {
      await connection.beginTransaction(); // Transacción para asegurar que se realicen todas las operaciones o ninguna

      // Validar el correo para alumnos
      if (rol === 'alumno' && !correo.endsWith('@alumnos.udg.mx')) { //need change to funcion 
        throw new Error("El correo debe tener la terminación @alumnos.udg.mx para alumnos.");
      }
  
      // Encriptar la contraseña
      const hashedPassword = await bcrypt.hash(contrasena, 10);
  
      // Crear el usuario en la tabla `usuarios`
      const idUsuario = await Usuario.agregarNuevoUsuario(connection, {
        correo,
        hashedPassword,
        nombre,
        rol,
      });
  
      // Si el rol es empresa, insertar datos en empresa
      if (rol === 'empresa') {
        await Empresa.crearEmpresa(connection, datosEmpresa, idUsuario);
      }
      await connection.commit(); // Confirmar la transacción
    } else {
      throw new Error("El correo ya está registrado.");
    }
    return { success: true, message: "Usuario creado exitosamente." };
  } catch (error) {
    await connection.rollback(); // Revertir la transacción en caso de error
    console.error("Error al crear usuario:", error);
    throw new Error("No se pudo crear el usuario.");
  } finally {
    connection.release(); // Liberar la conexión
  }
};

export default crearUsuario;