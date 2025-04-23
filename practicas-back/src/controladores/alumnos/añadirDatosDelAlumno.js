import Alumno from "../../modelos/modeloAlumno.js";

const añadirDatosDelAlumno = async (req, res) => {
  try {
    const correo = req.session?.correo;
    const idUsuario = req.session?.id;

    const datos = {
      ...req.body,
      CorreoInstitucional: correo,
      Id: idUsuario,
    };

    const resultado = await Alumno.agregarNuevoAlumno(datos);

    res.status(201).json({ mensaje: "Alumno agregado correctamente", resultado });
  } catch (error) {
    console.error("Error al añadir datos del alumno:", error.message);
    throw new Error("No se pudo procesar el formulario.");
  }
};

export default añadirDatosDelAlumno;