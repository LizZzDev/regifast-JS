import Alumnos from "../../modelos/modeloAlumno.js";
import Empresas from "../../modelos/modeloEmpresa.js";

const postularOfertaEmpresa = async (req, res) => {
    const idEmpresa = req.body;
    const idUsuario = req.session.ID;

    try { 
        const vacantes = await Empresas.obtenerVacantesPorId(idEmpresa);

        if (vacantes <= 0) {
           throw new Error("No hay vacantes disponibles para esta empresa.");
        }

        await Alumnos.aumentarEnUnoBarraStatus(idUsuario);
        await Alumnos.modificarDatosAlumno({ IdEmpresa: idEmpresa }, idUsuario);
        await Empresas.disminuirVacante(idEmpresa);

        return { mensaje: "Postulación exitosa" };
          
    } catch (error) {
        console.error("Error al postular a la oferta de la empresa:", error);
        throw error;
    }


}

export default postularOfertaEmpresa;