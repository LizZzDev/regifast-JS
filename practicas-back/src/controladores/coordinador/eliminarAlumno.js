import Alumno from "../../modelos/modeloAlumno.js";
import Usuario from "../../modelos/modeloUsuario.js";
import pool from '../../configuracion/db.js';

const eliminarAlumno = async (req) => {
    const { idUsuario } = req.query;
    const connection = await pool.getConnection();

    try {
        await connection.beginTransaction(); 

        await Alumno.eliminarPorId (connection, idUsuario);
        await Usuario.eliminarPorId (connection, idUsuario);

        await connection.commit(); 

        return { 
        success: true, 
        message: "Usuario eliminado exitosamente." 
        };

    } catch (error) {
        await connection.rollback(); 
        console.error("Error al eliminar usuario:", error);
        throw new Error("No se pudo eliminar el usuario.");
  } finally {
     connection.release(); 
  }
};

export default eliminarAlumno;