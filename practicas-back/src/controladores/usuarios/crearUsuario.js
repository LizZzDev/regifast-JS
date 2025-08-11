import bcrypt from 'bcrypt';
import pool from '../../configuracion/db.js';
import Usuario from '../../modelos/modeloUsuario.js';
import Empresa from '../../modelos/modeloEmpresa.js';
import JefeDepartamento from '../../modelos/modeloJefeDepartamento.js';
import Alumno from '../../modelos/modeloAlumno.js';

const validarCorreoAlumno = (correo) => {
  return correo.endsWith('@alumnos.udg.mx');
};

const obtenerCicloActual = () => {
    const ahora = new Date();
    const año = ahora.getFullYear();
    const mes = ahora.getMonth() + 1; 

    const ciclo = mes >= 1 && mes <= 6 ? 'A' : 'B';
    return `${año}${ciclo}`; 
}

/**
 * Crea un nuevo usuario en la base de datos.
 */

const crearUsuario = async (req) => {
  const { correo, contrasena, nombre, rol, datosJefeDepartamento } = req;

  console.log (req);
  const connection = await pool.getConnection();

  try {
    const usuarioExistente = await Usuario.buscarPorCorreo(correo);

    if (usuarioExistente) {
      throw new Error("El correo ya está registrado.");
    }

    await connection.beginTransaction(); 

    if (rol === 'alumno' && !validarCorreoAlumno(correo)) { 
      throw new Error("El correo debe tener la terminación @alumnos.udg.mx para alumnos.");
    }
  
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    
    const idUsuario = await Usuario.agregarNuevoUsuario(connection, {
      correo,
      hashedPassword,
      nombre,
      rol,
    });

    if (rol === 'jefeDepartamento') {
      await JefeDepartamento.crearJefeDeDepartamento(connection, datosJefeDepartamento, idUsuario);
    }

    if (rol === 'alumno') {
      const ciclo = obtenerCicloActual();
      await Alumno.agregarNuevoAlumno(connection, ciclo, correo, idUsuario, nombre);
    }

    await connection.commit(); 

    return { 
      success: true, 
      message: "Usuario creado exitosamente." 
    };
  } catch (error) {
      await connection.rollback(); 
      console.error("Error al crear usuario:", error);
      throw new Error("No se pudo crear el usuario.");
  } finally {
     connection.release(); 
  }
};

export default crearUsuario;