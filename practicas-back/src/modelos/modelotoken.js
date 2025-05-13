import pool from '../configuracion/db.js';

const Token = {
    guardarToken: async (tokenGenerado, IdUsuario, fechaCreacion, fechaExpiracion) => {
        try {
        const [result] = await pool.query(
            'INSERT INTO tokens (token, id, fecha_registro, fecha_vencimiento, usado) VALUES (?, ?, ?, ?, 0)', 
            [tokenGenerado, IdUsuario, fechaCreacion, fechaExpiracion]
        );
        return result.insertId;
        } catch (error) {
        console.error("Error en guardar token:", error);
        throw error;
        }
    },


    eliminarToken: async () => {
        try {
        const [result] = await pool.query(
            'DELETE FROM tokens WHERE usado = 1',
            [token]
        );
        return result.affectedRows;
        } catch (error) {
        console.error("Error en eliminar token:", error);
        throw error;
        }
    },

    obtenerTokenPorIdUsuario: async (idUsuario) => {
        try {
        const [rows] = await pool.query(
            'SELECT Token FROM tokens WHERE IdUsuario = ?',
            [idUsuario]
        );
        return rows[0] || null;
        } catch (error) {
        console.error("Error en obtener token por id de usuario:", error);
        throw error;
        }
    },

    eliminarTokenPorIdUsuario: async (idUsuario) => {
        try {
        const [result] = await pool.query(
            'DELETE FROM tokens WHERE IdUsuario = ?',
            [idUsuario]
        );
        return result.affectedRows;
        } catch (error) {
        console.error("Error en eliminar token por id de usuario:", error);
        throw error;
        }
    },

    eliminarTokensExpirados: async () => {
        try {
            const [result] = await pool.query(
                'DELETE FROM tokens WHERE FechaExpiracion <= NOW();'
            );
            return result.affectedRows;
        } catch (error) {
            console.error("Error en eliminar tokens expirados:", error);
            throw error;
        }
    }
};

export default Token;