import Empresas from "../../modelos/modeloEmpresa.js";

const obtenerEmpresa = async (req, res) => {
    let idEmpresa = req.query.idUsuario;
    try { 
      
        const empresa = await Empresas.obtenerEmpresaPorId(idEmpresa);
        return empresa;
    } catch (error) {
        console.error("Error al mostrar empresa seleccionada:", error);
        throw error;
    }
}

export default obtenerEmpresa;