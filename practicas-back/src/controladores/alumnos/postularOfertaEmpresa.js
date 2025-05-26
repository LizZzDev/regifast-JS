import Alumnos from "../../modelos/modeloAlumno.js";
import Empresas from "../../modelos/modeloEmpresa.js";

const postularOfertaEmpresa = async (req, res) => {
    const { IdEmpresa } = req.body;
    const idUsuario = req.session.ID;

    try { 
        const vacantes = await Empresas.obtenerVacantesPorId(IdEmpresa);

        const alumno = await Alumnos.obtenerAlumno (idUsuario)

        if (alumno.IdEmpresa != null ) {
            const error = new Error("El alumno ya tiene empresa seleccionada");
            error.statusCode = 400;
            throw error;        
        }

        if (vacantes <= 0) {
            const error = new Error("No hay vacantes disponibles para esta empresa");
            error.statusCode = 400;
            throw error;
            }

        await Alumnos.aumentarEnUnoBarraStatus(idUsuario);
        const aumentarBarraStatus = await Alumnos.modificarDatosAlumno({ BarraStatus: 3 }, idUsuario);
        await Empresas.disminuirVacante(IdEmpresa);

        return { mensaje: "Postulación exitosa" };
          
    } catch (error) {
        console.error("Error al postular a la oferta de la empresa:", error);
        throw error;
    }


}

export default postularOfertaEmpresa;