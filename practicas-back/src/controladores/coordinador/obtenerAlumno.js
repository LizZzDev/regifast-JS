import Alumno from "../../modelos/modeloAlumno.js";

const obtenerAlumnoPorId = async (req, res) => {
    const idUsuario = req.query.idUsuario;

    try { 
        const alumno = await Alumno.obtenerAlumno(idUsuario);

        return {
            alumno
        };
    } catch (error) {
        console.error("Error al obtener alumno:", error);
        throw error;
    }
}

export default obtenerAlumnoPorId;