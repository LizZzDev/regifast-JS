import Alumno from "../../modelos/modeloAlumno.js";

const validarAlumno = async (req, res) => {
    const { idUsuario } = req.body;

    try { 
        const alumno = await Alumno.obtenerAlumno (idUsuario);

        if (alumno.Revision == 1) {
            throw new Error ("Alumno ya validado");
        }

        const validar = await Alumno.modificarDatosAlumno({ Revision: 1, BarraStatus: 2 }, idUsuario);


        return {
            validar
        };
    } catch (error) {
        console.error("Error al validar alumno:", error);
        throw error;
    }
}

export default validarAlumno;