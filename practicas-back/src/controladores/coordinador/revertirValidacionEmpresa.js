import Empresas from "../../modelos/modeloEmpresa.js";

const revertirValidacionEmpresa = async (req, res) => {
    const { idUsuario } = req.body;

    try { 
        const empresa = await Empresas.obtenerEmpresaPorId (idUsuario);
        console.log (empresa)
        if (empresa.Validada == 0) {
            throw new Error ("Empresa no validada");
        }

        const revertirValidacion = await Empresas.modificarDatosEmpresa({ Validada: 0}, idUsuario);

        return {
            revertirValidacion
        };
    } catch (error) {
        console.error("Error al revertir validacion empresa:", error);
        throw error;
    }
}

export default revertirValidacionEmpresa;