import Alumno from "../../modelos/modeloAlumno.js";

const validarAlumno = async (req, res) => {
    const { idUsuario } = req.body;

    try { 
        const validar = await Alumno.validarAlumno(idUsuario);
        const aumentarBarraStatus = await Alumno.aumentarEnUnoBarraStatus(idUsuario);

        return {
            validar,
            aumentarBarraStatus
        };
    } catch (error) {
        console.error("Error al validar alumno:", error);
        throw error;
    }
}

export default validarAlumno;