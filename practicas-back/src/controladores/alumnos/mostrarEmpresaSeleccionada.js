import Alumnos from "../../modelos/modeloAlumno.js";
import Empresas from "../../modelos/modeloEmpresa.js";

const mostrarEmpresaSeleccionada = async (req, res) => {
    const idUsuario = req.session.ID;

    try { 
        const alumno = await Alumnos.obtenerAlumno(idUsuario);
        const idEmpresa = alumno.IdEmpresa;
        const empresa = await Empresas.obtenerEmpresaPorId(idEmpresa);
        
        return empresa;
    } catch (error) {
        console.error("Error al mostrar empresa seleccionada:", error);
        throw error;
    }


}

export default mostrarEmpresaSeleccionada;