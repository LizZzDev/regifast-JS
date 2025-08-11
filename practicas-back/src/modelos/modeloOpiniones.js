import pool from '../configuracion/db.js';

const Opiniones = {
  obtenerOpinionesPorId: async (id) => {
    try {
      const [rows] = await pool.query('SELECT * FROM opinionempresa WHERE IdEmpresa = ?', [id]);
      return rows;
    } catch (error) {
      console.error("Error en obtener opiniones por id:", error);
      throw error;
    }
  },

  obtenerNumeroDeOpinionesPorId: async (id) => {
    try {
      const [rows] = await pool.query('SELECT COUNT(*) FROM opinionempresa WHERE IdEmpresa = ?', [id]);
      return rows;
    } catch (error) {
      console.error("Error en obtener numeros de opiniones por id", error);
      throw error;
    }
  },

  obtenerSumaDeCalificacionesAEmpresasPorId: async (id) => {
    try {
      const [rows] = await pool.query('SELECT SUM(Calificacion) AS total_calificaciones FROM opinionempresa WHERE IdEmpresa = ?', [id]);
      return rows;
    } catch (error) {
      console.error("Error en obtener suma de calificacion de empresa por id:", error);
      throw error;
    }
  },

  agregarOpinion: async (data) => {
    const {IdUsuario, NombreUsuario, Opinion, Calificacion, IdEmpresa } = data;
    try {
      const [result] = await pool.query(
        'INSERT INTO opinionempresa (IdUsuario, IdEmpresa, NombreUsuario, Opinion, Calificacion) VALUES (?, ?, ?, ?, ?)',
        [IdUsuario, IdEmpresa, NombreUsuario, Opinion, Calificacion]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error en agregar nueva opinion:", error);
      throw error;
    }
  },
};

export default Opiniones;