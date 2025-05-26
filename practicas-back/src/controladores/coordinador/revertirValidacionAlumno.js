import Alumno from "../../modelos/modeloAlumno.js";

const revertirValidacionAlumno = async (req, res) => {
    const { idUsuario } = req.body;

    try { 
        const alumno = await Alumno.obtenerAlumno (idUsuario);

        if (alumno.Revision == 0) {
            throw new Error ("Alumno no validado");
        }

        const revertirValidacion = await Alumno.modificarDatosAlumno({ Revision: 0, BarraStatus: 2 }, idUsuario);

        return {
            revertirValidacion
        };
    } catch (error) {
        console.error("Error al validar alumno:", error);
        throw error;
    }
}

export default revertirValidacionAlumno;