import Alumnos from "../../modelos/modeloAlumno.js";
import Opinion from "../../modelos/modeloOpiniones.js";

const obtenerCalificacionesDeLasEmpresas = async (req, res) => {    
    const { id } = req.query
    
    try { 
        const opiniones = await Opinion.obtenerOpinionesPorId(id);
        const numeroDeOpiniones = await Opinion.obtenerNumeroDeOpinionesPorId(id);
        const sumaDeCalificaciones = await Opinion.obtenerSumaDeCalificacionesAEmpresasPorId(id);

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

export default obtenerCalificacionesDeLasEmpresas;