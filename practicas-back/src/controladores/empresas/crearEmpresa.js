import bcrypt from 'bcrypt';
import pool from '../../configuracion/db.js';
import Usuario from '../../modelos/modeloUsuario.js';
import Empresa from '../../modelos/modeloEmpresa.js';

const crearEmpresa = async (req) => {
    const {
    correo,
    contrasena, 
    nombre,
    datosEmpresa 
    } = req;

  const logo = req.file?.filename || null;
  const connection = await pool.getConnection();

  try {
    const usuarioExistente = await Usuario.buscarPorCorreo(correo);
    if (usuarioExistente) {
      throw new Error("El correo ya está registrado.");
    }

    await connection.beginTransaction();

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const idUsuario = await Usuario.agregarNuevoUsuario(connection, {
      correo,
      hashedPassword,
      nombre,
      rol: 'empresa'
    });

    await Empresa.agregarNuevaEmpresa(connection, datosEmpresa, idUsuario, correo);

    await connection.commit();

    return {
      success: true,
      message: "Empresa registrada exitosamente."
    };
  } catch (error) {
    await connection.rollback();
    console.error("Error al registrar empresa:", error);
    throw new Error("No se pudo registrar la empresa.");
  } finally {
    connection.release();
  }
};

export default crearEmpresa;