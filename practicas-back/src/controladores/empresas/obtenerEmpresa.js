import Empresas from "../../modelos/modeloEmpresa.js";

const obtenerEmpresa = async (req, res) => {
    const idUsuario = req.session.ID;

    try { 
        const empresa = await Empresas.obtenerEmpresaPorIdUsuario(idUsuario);

        return {
            empresa
        };
    } catch (error) {
        console.error("Error al mostrar empresa seleccionada:", error);
        throw error;
    }
}

export default obtenerEmpresa;