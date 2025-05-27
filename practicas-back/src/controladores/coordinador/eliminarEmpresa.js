import Empresas from "../../modelos/modeloEmpresa.js";
import Usuario from "../../modelos/modeloUsuario.js";
import pool from '../../configuracion/db.js';

const eliminarEmpresa = async (req) => {
    const idUsuario = req.query.idUsuario || null;
    const idEmpresa = req.query.idEmpresa || null;
    const connection = await pool.getConnection();

    try {
        if (idUsuario) {
            await connection.beginTransaction(); 

            await Empresas.eliminarPorIdUsuario (connection, idUsuario);
            await Usuario.eliminarPorId (connection, idUsuario);

            await connection.commit(); 
        } else {
            await Empresas.eliminarPorIdAlumno(idEmpresa)
        }
      

        return { 
        success: true, 
        message: idUsuario 
            ? "Usuario y empresa eliminados exitosamente."
            : "Empresa eliminada exitosamente."
        };

    } catch (error) {
        if (idUsuario) await connection.rollback();
        console.error("Error al eliminar usuario:", error);
        throw new Error("No se pudo eliminar el usuario.");
  } finally {
     connection.release(); 
  }
};

export default eliminarEmpresa;