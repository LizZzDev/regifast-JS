const bcrypt = require('bcrypt');
const pool = require('../../configuracion/db');
const Usuario = require('../../modelos/modeloUsuario');
const Empresa = require('../../modelos/modeloEmpresa');

const crearUsuario = async (req) => {
  const { correo, contrasena, rol, datosEmpresa } = req.body;
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction(); // Transacción para asegurar que se realicen todas las operaciones o ninguna

    // Validar el correo para alumnos
    if (rol === 'alumno' && !correo.endsWith('@alumnos.udg.mx')) {
      throw new Error("El correo debe tener la terminación @alumnos.udg.mx para alumnos.");
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    // Crear el usuario en la tabla `usuarios`
    const idUsuario = await Usuario.crearUsuario(connection, correo, hashedPassword, rol);

    // Si el rol es empresa, insertar datos en empresa
    if (rol === 'empresa') {
      await Empresa.crearEmpresa(connection, datosEmpresa, idUsuario);
    }

    await connection.commit(); // Confirmar la transacción
    return { success: true, message: "Usuario creado exitosamente." };
  } catch (error) {
    await connection.rollback(); // Revertir la transacción en caso de error
    console.error("Error al crear usuario:", error);
    throw new Error("No se pudo crear el usuario.");
  } finally {
    connection.release(); // Liberar la conexión
  }
};

module.exports = crearUsuario;