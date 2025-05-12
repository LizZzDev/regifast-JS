import Alumno from "../../modelos/modeloAlumno.js";

const obtenerBarraStatusPorId = async (req, res) => {
        try {
            const idUsuario = req.session.ID;
            const alumno = await Alumno.obtenerAlumno(idUsuario);
            const barraStatus = alumno.BarraStatus;
            return barraStatus;
        } catch (error) {
            console.error("Error al obtener la barra de status:", error);
            throw error;
        }
    };

export default obtenerBarraStatusPorId;