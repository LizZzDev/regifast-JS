import pool from '../configuracion/db.js';
import jwt from 'jsonwebtoken';
import token from '../usuarios/generarToken.js';

const Token = {
    guardarToken: async (token, email, generatedAt, expiresAt) => {
        try {
        const [result] = await pool.query(
            'INSERT INTO tokens (Token, IdUsuario, generatedAt, expiresAt) VALUES (?, ?, ?, ?)', 
            [token, id, generatedAt, expiresAt]
        );
        return result.insertId;
        } catch (error) {
        console.error("Error en guardar token:", error);
        throw error;
        }
    },

    eliminarToken: async (token) => {
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
