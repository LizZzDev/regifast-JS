import añadirDatosDelAlumnoService from "./añadirDatosDelAlumno.js";

export const añadirDatosDelAlumno = async (req, res) => {
    try {
      const response = await añadirDatosDelAlumnoService(req.body);
      return response;
    } catch (error) {
      console.error("Error al crear cuenta:", error.message);
      return res.status(401).json({ success: false, message: error.message });
    }
  };
  