import anadirDatosDelAlumnoService from "./anadirDatosDelAlumno.js";
import barraStatusService from "./barraStatus.js";

export const anadirDatosDelAlumno = async (req, res) => {
    try {
      const response = await anadirDatosDelAlumnoService(req);
      res.status(201).json({ mensaje: "Alumno agregado correctamente", response });
    } catch (error) {
      console.error("Error al crear cuenta:", error.message);
      return res.status(401).json({ success: false, message: error.message });
    }
  };
  
export const  obtenerBarraStatus = async (req, res) => {
    try {
      const response = await barraStatusService.obtenerBarraStatusPorId(req);
      res.status(201).json({ mensaje: "Se obtuvo la barra status", response });
    } catch (error) {
      console.error("Error al obtener la cifra:", error.message);
      return res.status(401).json({ success: false, message: error.message });
    }
  };


export const aumentarBarraStatusPorId = async (req, res) => {
    try {
      const response = await barraStatusService.aumentarBarraStatusPorId(req);
      res.status(201).json({ mensaje: "Se aumento la barra satatus", response });
    } catch (error) {
      console.error("Error al aumentar:");
      return res.status(401).json({ success: false, message: error.message });
    }
  };
  
  