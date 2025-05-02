import modificarDatosDelAlumnoService from "./modificarDatosDelAlumno.js";
import obtenerAlumnosService from "./obtenerAlumnos.js";
import obtenerAlumnoService from "./obtenerAlumno.js";

export const obtenerAlumno = async (req, res) => {
  try {
    const response = await obtenerAlumnoService(req);
    res.status(200).json({ response });
  } catch (error) {
    console.error("Error al obtener datos del alumno:", error.message);
    return res.status(401).json({ success: false, message: error });
  }
};

export const obtenerAlumnos = async (req, res) => {
  try {
    const response = await obtenerAlumnosService(req);
    res.status(200).json({ response });
  } catch (error) {
    console.error("Error al obtener datos del alumno:", error.message);
    return res.status(401).json({ success: false, message: error });
  }
};

export const modificarDatosDelAlumno = async (req, res) => {
    try {
      const response = await modificarDatosDelAlumnoService(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al modificar datos del alumno:", error.message);
      return res.status(401).json({ success: false, message: error });
    }
  };