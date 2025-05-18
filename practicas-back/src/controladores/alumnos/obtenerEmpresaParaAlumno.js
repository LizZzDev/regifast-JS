import Empresas from "../../modelos/modeloEmpresa.js";

const obtenerEmpresa = async (req, res) => {
    const id = req.query.id;
    try { 
        const empresa = await Empresas.obtenerEmpresaPorId(id);

        return empresa;
    } catch (error) {
        console.error("Error al mostrar empresa seleccionada:", error);
        throw error;
    }
}

export default obtenerEmpresa;