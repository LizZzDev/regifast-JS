import Alumno from "../../modelos/modeloAlumno.js";

const obtenerBarraStatusPorId = async (req, res) => {
        try {
            const idUsuario = req.session.ID;
            console.log (idUsuario);
            const alumno = await Alumno.obtenerAlumno(idUsuario);
            if (alumno) {
                const barraStatus = alumno.BarraStatus;
                return barraStatus;
            }
            return 0;
        } catch (error) {
            console.error("Error al obtener la barra de status:", error);
            throw error;
        }
    };

export default obtenerBarraStatusPorId;