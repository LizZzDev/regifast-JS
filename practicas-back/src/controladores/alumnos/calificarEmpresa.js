import Alumnos from "../../modelos/modeloAlumno.js";
import Opinion from "../../modelos/modeloOpiniones.js";

const calificarEmpresa = async (req, res) => {
    const idUsuario = req.session.ID;
    try { 
        const empresa = await Alumnos.obtenerAlumno(idUsuario);
        const idEmpresa = empresa.IdEmpresa;

        const data = {
            IdUsuario: idUsuario,
            Opinion: req.body.Opinion,
            Calificacion: req.body.Calificacion,
            IdEmpresa: idEmpresa
        };
        
        const resultado = await Opinion.agregarOpinion(data);
        return {resultado};
    } catch (error) {
        console.error("Error al calificar empresa:", error);
        throw error;
    }


}

export default calificarEmpresa;