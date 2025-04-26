import Alumno from "../../modelos/modeloAlumno.js";
import express from 'express';

const barraStatus = {
    obtenerBarraStatusPorId: async (req) => {
        try {
            const idUsuario = req.session.ID;
            const alumno = await Alumno.obtenerAlumno(idUsuario);
            const barraStatus = alumno.BarraStatus;
            return {
                barraStatus
            };
        } catch (error) {
            console.error("Error al obtener la barra de status:", error);
            throw error;
        }
    },

    aumentarBarraStatusPorId: async (id) => {
    
    }
}

export default barraStatus;