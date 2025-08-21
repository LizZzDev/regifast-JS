import pool from '../configuracion/db.js';

const jefeDeDepartamento = {
    crearJefeDeDepartamento: async (connection, datos, idUsuario) => {
      const { Carrera} = datos;
      try {
        const [result] = await connection.query(
          `INSERT INTO jefededepartamento(IdUsuario, Carrera) VALUES (?, ?)`,
          [idUsuario, Carrera]
        );
        return result;
      } catch (error) {
        console.error("Error en agregar al jefe de departamento:", error);
        throw error;
      }
    },

    obtenerJefe: async (idUsuario) => {
      try {
        console.log (idUsuario)
         const [result] = await pool.query(
          `SELECT Carrera FROM jefededepartamento WHERE IdUsuario = ?`,
          [idUsuario]
         );
         console.log (result);
         return result [0];
      } catch (error) {
        console.error("Error en obtenre carrera jefe de departamento:", error);
        throw error;
      }
    }
};

export default jefeDeDepartamento;