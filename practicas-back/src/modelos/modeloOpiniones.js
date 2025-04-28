import pool from '../configuracion/db.js';

const Opiniones = {
  obtenerOpinionesPorId: async (id) => {
    try {
      const [rows] = await pool.query('SELECT * FROM opiniones WHERE IdEmpresa = ?', [id]);
      return rows;
    } catch (error) {
      console.error("Error en obtener opiniones por id:", error);
      throw error;
    }
  },

  obtenerNumeroDeOpinionesPorId: async (id) => {
    try {
      const [rows] = await pool.query('SELECT COUNT(*) FROM opiniones WHERE IdEmpresa = ?', [id]);
      return rows;
    } catch (error) {
      console.error("Error en obtener numeros de opiniones por id", error);
      throw error;
    }
  },

  obtenerSumaDeCalificacionesAEmpresasPorId: async (id) => {
    try {
      const [rows] = await pool.query('SELECT SUM(Calificacion) AS total_calificaciones FROM opiniones WHERE IdEmpresa = ?', [id]);
      return rows;
    } catch (error) {
      console.error("Error en obtener suma de calificacion de empresa por id:", error);
      throw error;
    }
  },

  agregarOpinion: async (data) => {
    const {IdUsuario, Opinion, Calificacion, Empresa } = data;
    try {
      const [result] = await pool.query(
        'INSERT INTO opiniones (Usuario, Opinion, Calificacion, Empresa) VALUES (?, ?, ?, ?)',
        [IdUsuario, Opinion, Calificacion, Empresa]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error en agregar nueva opinion:", error);
      throw error;
    }
  },
};

export default Opiniones;