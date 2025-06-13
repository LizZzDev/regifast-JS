import Alumnos from "../../modelos/modeloAlumno.js";
import Opinion from "../../modelos/modeloOpiniones.js";

const calificarEmpresa = async (req, res) => {
    const idUsuario = req.session.ID;
    try { 
        const alumno = await Alumnos.obtenerAlumno(idUsuario);
        const idEmpresa = alumno.IdEmpresa;

        const data = {
            IdUsuario: idUsuario,
            NombreUsuario: alumno.NombreCompleto,
            Opinion: req.body.Opinion,
            Calificacion: req.body.Calificacion,
            IdEmpresa: idEmpresa
        };

        const aumentarBarraStatus = await Alumnos.modificarDatosAlumno({ BarraStatus: 5 }, idUsuario);
        
        const resultado = await Opinion.agregarOpinion(data);
        return resultado;
    } catch (error) {
        console.error("Error al calificar empresa:", error);
        throw error;
    }


}

export default calificarEmpresa;