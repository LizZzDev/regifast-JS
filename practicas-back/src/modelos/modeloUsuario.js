import pool from '../configuracion/db.js';

const Usuario = {
  buscarPorCorreo: async (correo) => {
    try {
      const [rows] = await pool.query('SELECT * FROM usuarios WHERE Correo = ?', [correo]);
      return rows[0] || null;
    } catch (error) {
      console.error("Error en buscar por correo:", error);
      throw error;
    }
  },

  buscarPorRol: async (rol) => {
    try {
      const [rows] = await pool.query('SELECT * FROM usuarios WHERE Rol = ?', [rol]);
      return rows[0] || null;
    } catch (error) {
      console.error("Error en buscar por rol:", error);
      throw error;
    }
  },

  agregarNuevoUsuario: async (connection, data) => {
    const {correo, hashedPassword, nombre, rol } = data;
    try {
      const [result] = await connection.query(
        'INSERT INTO usuarios (Correo, Contrasena, Nombre, Rol) VALUES (?, ?, ?, ?)',
        [correo, hashedPassword, nombre, rol]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error en agregar nuevo usuario:", error);
      throw error;
    }
  },

  eliminarPorId: async (id) => {
    try {
      const [result] = await pool.query('DELETE FROM usuarios WHERE IdUsuario = ?', [id]);
      return result;
    } catch (error) {
      console.error("Error en eliminar por id:", error);
      throw error;
    }
  },
};

export default Usuario;