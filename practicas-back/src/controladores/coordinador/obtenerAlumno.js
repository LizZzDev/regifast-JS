import Alumno from "../../modelos/modeloAlumno.js";

const obtenerAlumnoPorId = async (req, res) => {
    let idUsuario = req.session.ID;

    try { 
        if (req.session.rol == 'coordinador') {
            let idUsuario = req.query.idUsuario;
        }

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