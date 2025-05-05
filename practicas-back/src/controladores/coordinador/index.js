import modificarDatosDelAlumnoService from "./modificarDatosDelAlumno.js";
import obtenerAlumnosService from "./obtenerAlumnos.js";
import obtenerAlumnoService from "./obtenerAlumno.js";
import validarAlumnoService from "./validarAlumno.js";
import validarEmpresaService from "./validarEmpresa.js";
import obtenerBarraStatusParaEstadisticasService from "./obtenerBarraStatusParaEstadisticas.js";

export const obtenerAlumno = async (req, res) => {
  try {
    const response = await obtenerAlumnoService(req);
    res.status(200).json({ response });
  } catch (error) {
    console.error("Error al obtener datos del alumno:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const obtenerAlumnos = async (req, res) => {
  try {
    const response = await obtenerAlumnosService(req);
    res.status(200).json({ response });
  } catch (error) {
    console.error("Error al obtener datos del alumno:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const obtenerBarraStatusParaEstadisticas = async (req, res) => {
  try {
    const response = await obtenerBarraStatusParaEstadisticasService(req);
    res.status(200).json({ response });
  } catch (error) {
    console.error("Error al obtener datos del alumno:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const validarAlumno = async (req, res) => {
  try {
    const response = await validarAlumnoService(req);
    res.status(200).json({ response });
  } catch (error) {
    console.error("Error al validar alumno:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const modificarDatosDelAlumno = async (req, res) => {
    try {
      const response = await modificarDatosDelAlumnoService(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al modificar datos del alumno:", error.message);
      return res.status(500).json({ success: false, message: error });
    }
  };

  export const validarEmpresa = async (req, res) => {
    try {
      const response = await validarEmpresaService(req);
      res.status(200).json({ response });
    } catch (error) {
      console.error("Error al validar empresa:", error.message);
      return res.status(500).json({ success: false, message: error });
    }
  };
  