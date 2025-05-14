import Alumno from "../modelos/modeloAlumno.js";
import Fechas from "../modelos/modeloFechaIngreso.js"

 const soloFecha = (fecha) => {
    return new Date(fecha.toISOString().split("T")[0]);
  };

const verificarAccesoEmpresas = async (req, res, next) => {
    const idUsuario = req.session.ID;
    const alumno = await Alumno.obtenerAlumno(idUsuario);

      if (!alumno) {
      return res.status(404).json({ success: false, message: "Alumno no encontrado" });
    }

    const calificacion = alumno.Calificacion;
    const ordinario = alumno.Ordinario;

    const fechas = await Fechas.obtenerFechas();
    const hoy = soloFecha(new Date());

    const rango = fechas.find(f =>
      calificacion <= f.MaxCalificacion &&
      calificacion >= f.MinCalificacion &&
      hoy >= new Date(f.FechaInicio) &&
      hoy <= new Date(f.FechaFin)
    );

    if (!rango) {
      return res.status(403).json({
        success: false,
        message: "Actualmente no tienes acceso para ver las empresas según tu calificación.",
      });
    }

    if (!ordinario) {
      req.query.practicasExtraordinarias = 'true';
    }

    next();
}

export default verificarAccesoEmpresas;