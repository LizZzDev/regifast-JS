/* 
* Modelo para manejar las fechas de ingreso de los alumnos segun su calificacion 
*/

const fechaIngreso = {
    actualizarFechasPorId: async (connection, idRango, fechaInicio, fechaFin) => {
      try {
        const query = `
          UPDATE accesoPorCalificacion
          SET FechaInicio = ?, FechaFin = ?
          WHERE IdRango = ?
        `;
        const result = await connection.query(query, [fechaInicio, fechaFin, idRango]);
        return { success: true };
      } catch (error) {
        console.error("Error en agregar al jefe de departamento:", error);
        throw error;
      }
    }
};

export default fechaIngreso;