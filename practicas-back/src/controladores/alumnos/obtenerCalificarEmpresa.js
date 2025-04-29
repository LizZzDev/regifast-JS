import Alumnos from "../../modelos/modeloAlumno.js";
import Opinion from "../../modelos/modeloOpiniones.js";

const obtenerCalificarEmpresa = async (req, res) => {    
    const idUsuario = req.session.ID;
    try { 
        const empresa = await Alumnos.obtenerAlumno(idUsuario);
        const idEmpresa = empresa.IdEmpresa;
        
        const opiniones = await Opinion.obtenerOpinionesPorId(idEmpresa);
        const numeroDeOpiniones = await Opinion.obtenerNumeroDeOpinionesPorId(idEmpresa);
        const sumaDeCalificaciones = await Opinion.obtenerSumaDeCalificacionesAEmpresasPorId(idEmpresa);

        const totalOpiniones = numeroDeOpiniones[0]['COUNT(*)'];
        const totalCalificaciones = parseFloat(sumaDeCalificaciones[0].total_calificaciones);
        
        const promedioDeCalificaciones = totalOpiniones > 0 ? totalCalificaciones / totalOpiniones : 0;
        const calificacionFinal = Math.round(promedioDeCalificaciones * 10) / 10; 

        return { 
            opiniones, 
            totalOpiniones, 
            calificacionFinal
        };

    } catch (error) {
        console.error("Error al obtener calificaciones de la empresa:", error);
        throw error;
    }
}       

export default obtenerCalificarEmpresa;