import Empresas from "../../modelos/modeloEmpresa.js";

const revertirValidacionEmpresa = async (req, res) => {
    const { idUsuario } = req.body;

    try { 
        const empresa = await Empresas.obtenerEmpresaPorIdUsuario (idUsuario);

        if (empresa.Validada == 0) {
            throw new Error ("Alumno no validado");
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