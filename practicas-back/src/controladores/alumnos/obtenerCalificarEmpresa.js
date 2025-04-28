import Alumnos from "../../modelos/modeloAlumno.js";
import Opinion from "../../modelos/modeloOpiniones.js";

const obtenerCalificarEmpresa = async (req, res) => {    
    try { 
        const empresa = await Alumnos.obtenerAlumno(idUsuario);
        const idEmpresa = empresa.IdEmpresa;
        
        const opiniones = await Opinion.obtenerOpinionesPorId(idEmpresa);
        const numeroDeOpiniones = await Opinion.obtenerNumeroDeOpinionesPorId(idEmpresa);
        const sumaDeCalificaciones = await Opinion.obtenerSumaDeCalificacionesAEmpresasPorId(idEmpresa);
        
        return { opiniones, numeroDeOpiniones, sumaDeCalificaciones };

    } catch (error) {
        console.error("Error al obtener calificaciones de la empresa:", error);
        throw error;
    }
}       

export default obtenerCalificarEmpresa;