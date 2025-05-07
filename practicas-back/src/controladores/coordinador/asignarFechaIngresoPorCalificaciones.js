import pool from '../../configuracion/db.js';
import modeloFechaIngreso from '../../modelos/modeloFechaIngreso.js';

const asignarFechaIngresoPorCalificaciones = async (req) => {
  const connection = await pool.getConnection();
  const { rangos } = req.body;

  try {
    for (const rango of rangos) {
        const { idRango, fechaInicio, fechaFin } = rango;
        await modeloFechaIngreso.actualizarFechasPorId(
            connection,
            idRango,
            fechaInicio,
            fechaFin
          );
      }
    
    await connection.commit(); 
    
    return { 
      success: true, 
      message: "Asignado exitosamente.",
    };
  } catch (error) {
      await connection.rollback(); 
      console.error("Error al asignar fechas para ingreso por calificacion:", error);
      throw new Error("Error al asignar fechas.");
  } finally {
     connection.release(); 
  }
};

export default asignarFechaIngresoPorCalificaciones;