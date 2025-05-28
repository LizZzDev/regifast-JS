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

  eliminarPorId: async (connection, id) => {
    try {
      const [result] = await connection.query('DELETE FROM usuarios WHERE IdUsuario = ?', [id]);
      return result;
    } catch (error) {
      console.error("Error en eliminar por id:", error);
      throw error;
    }
  },

    guardarTokenRecuperarContrasena: async (tokenGenerado, fechaExpiracion, correo) => {
    try {
      const [result] = await pool.query("UPDATE usuarios SET TokenRecuperacion = ?, Expiracion = ? WHERE Correo = ?", [
        tokenGenerado,
        fechaExpiracion,
        correo,
    ]);
      return result;
    } catch (error) {
      console.error("Error en guardar token recuperar contrasena:", error);
      throw error;
    }
  },

  restablecerContrasenaPorToken: async (nuevaContrasena, token) => {
  try {
    const [result] = await pool.query(
      `UPDATE usuarios 
       SET Contrasena = ?, TokenRecuperacion = NULL, Expiracion = NULL 
       WHERE TokenRecuperacion = ? AND Expiracion > NOW()`,
      [nuevaContrasena, token]
    );
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error al restablecer contraseña:", error);
    throw error;
  }
}
};

export default Usuario;