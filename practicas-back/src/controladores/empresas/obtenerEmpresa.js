import Empresas from "../../modelos/modeloEmpresa.js";

const obtenerEmpresa = async (req, res) => {
    let idUsuario = req.session.ID;
    try { 
          if (req.session.rol == 'coordinador') {
            let idUsuario = req.query.idEmpresa;
            const empresa = await Empresas.obtenerEmpresaPorId(idUsuario);
            return empresa;

        }
        const empresa = await Empresas.obtenerEmpresaPorIdUsuario(idUsuario);
        return empresa;
    } catch (error) {
        console.error("Error al mostrar empresa seleccionada:", error);
        throw error;
    }
}

export default obtenerEmpresa;