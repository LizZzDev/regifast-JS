const pool = require('../configuracion/db');

const Usuario = {
  // Buscar un usuario por correo
  buscarPorCorreo: async (correo) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE Correo = ?', [correo]);
        return rows[0] || null; 
    } catch (error) {
        console.error("Error en buscar por correo:", error);
        throw error;
    }
  },

  // Buscar un usuario por rol
  buscarPorRol: async (rol) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE Rol = ?', [rol]);
        return rows[0] || null; 
    } catch (error) {
        console.error("Error en buscar por rol:", error);
        throw error;
    }
  },


  // Crear un nuevo usuario
  agregarNuevoUsuario: async (data) => {
    const {
        Nombre, Correo, Contrasena, TipoDeUsuario
    } = data;

    try { 
        const [result] = await pool.query(
            'INSERT INTO usuarios (Nombre, Correo, Contrasena, TipoDeUsuario) VALUES (?, ?, ?. ?)',
            [Nombre, Correo, Contrasena, TipoDeUsuario]
        );
        return result; 
    } catch (error) {
        console.error("Error en agregar nuevo usuario:", error);
        throw error;
    }
  },

  // Eliminar un usuario por ID
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

module.exports = Usuario;