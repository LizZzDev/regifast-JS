import Empresa from "../../modelos/modeloEmpresa.js";

const validarAlumno = async (req, res) => {
    const { idUsuario } = req.body;

    try { 
        console.log (idUsuario);
        const validarEmpresa = await Empresa.validarEmpresa(idUsuario);
        console.log (validarEmpresa);
        return validarEmpresa;
    } catch (error) {
        console.error("Error al validar empresa:", error);
        throw error;
    }
}

export default validarAlumno;