import anadirDatosDelAlumnoService from "./anadirDatosDelAlumno.js";

export const anadirDatosDelAlumno = async (req, res) => {
  console.log("Sesión completa:", req.session);

    try {
      const response = await anadirDatosDelAlumnoService(req);
      res.status(201).json({ mensaje: "Alumno agregado correctamente", response });
    } catch (error) {
      console.error("Error al crear cuenta:", error.message);
      return res.status(401).json({ success: false, message: error.message });
    }
  };
  