import pool from '../configuracion/db.js';

/* 
* Modelo para manejar las fechas de ingreso de los alumnos segun su calificacion 
*/

const fechaIngreso = {
    actualizarFechasPorId: async (connection, idRango, fechaInicio, fechaFin) => {
      try {
        const query = `
          UPDATE accesoporcalificacion",
          SET FechaInicio = ?, FechaFin = ?
          WHERE IdRango = ?
        `;
        const result = await connection.query(query, [fechaInicio, fechaFin, idRango]);
        return { success: true };
      } catch (error) {
        console.error("Error en actualizar fechas:", error);
        throw error;
      }
    },

    obtenerFechas: async () => {
      try {
        const [rows] = await pool.query(
          "SELECT * FROM accesoporcalificacion",
        );
        return rows;
      } catch (error) {
        console.error("Error en obtener fechas:", error);
        throw error;
      }
    }
};

export default fechaIngreso;