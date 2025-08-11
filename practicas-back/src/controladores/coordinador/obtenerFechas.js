import Fecha from '../../modelos/modeloFechaIngreso.js';

const obtenerFechasParaPostularseEmpresas = async (req) =>  {
    const {rango} = req.query;
    
    try {
        const fechasPostulacion = await Fecha.obtenerFechas();
        return fechasPostulacion;
    } catch (error) {
        console.error("Error al obtener fechas:", error);
        throw error;
    }
}

export default obtenerFechasParaPostularseEmpresas;