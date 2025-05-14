import pool from '../configuracion/db.js';

const Token = {
    guardarToken: async (tokenGenerado, correo, fechaCreacion, fechaExpiracion) => {
        try {
        const [result] = await pool.query(
            'INSERT INTO Token (Token, Fecha_registro, Fecha_vencimiento, Correo, Intentos) VALUES (?, ?, ?, ?, 0)', 
            [tokenGenerado, fechaCreacion, fechaExpiracion, correo]
        );
        return result.insertId;
        } catch (error) {
        console.error("Error en guardar token:", error);
        throw error;
        }
    },

    obtenerTokenPorcorreo: async (correo) => {
        try {
        const [rows] = await pool.query(
            'SELECT Token, Intentos FROM Token WHERE correo = ?',
            [correo]
        );
        return rows[0] || null;
        } catch (error) {
        console.error("Error en obtener token por id de usuario:", error);
        throw error;
        }
    },

    eliminarTokenPorcorreo: async (correo) => {
        try {
        const [result] = await pool.query(
            'DELETE FROM Token WHERE correo = ?',
            [correo]
        );
        return result.affectedRows;
        } catch (error) {
        console.error("Error en eliminar token por id de usuario:", error);
        throw error;
        }
    },

    aumentarIntentosToken: async (correo) => {
        try {
            const [result] = await pool.query(
            'UPDATE Token SET intentos = intentos + 1 WHERE correo = ?',
            [correo]
        );
        return result;
        } catch (error) {

        }
    }
};

export default Token;