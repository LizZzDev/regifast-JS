import modificarDatosDelAlumnoService from "./modificarDatosDelAlumno.js";
import obtenerAlumnosService from "./obtenerAlumnos.js";
import obtenerAlumnoService from "./obtenerAlumno.js";
import validarAlumnoService from "./validarAlumno.js";
import validarEmpresaService from "./validarEmpresa.js";
import obtenerBarraStatusParaEstadisticasService from "./obtenerBarraStatusParaEstadisticas.js";
import anadirEmpresaService from "./anadirEmpresa.js";
import asignarFechaIngresoPorCalificacionesService from "./asignarFechaIngresoPorCalificaciones.js";
import obtenerNumeroAlumnosService from "./obtenerNumeroAlumnos.js";

export const anadirEmpresa = async (req, res) => {
  try {
    const response = await anadirEmpresaService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al añadir empresa:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const asignarFechaIngresoPorCalificaciones = async (req, res) => {
  try {
    const response = await asignarFechaIngresoPorCalificacionesService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al asignar fecha de ingreso por calificaciones:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const modificarDatosDelAlumno = async (req, res) => {
  try {
    const response = await modificarDatosDelAlumnoService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al modificar datos del alumno:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const obtenerAlumno = async (req, res) => {
  try {
    const response = await obtenerAlumnoService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al obtener datos del alumno:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const obtenerAlumnos = async (req, res) => {
  try {
    const response = await obtenerAlumnosService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al obtener datos del alumno:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const obtenerBarraStatusParaEstadisticas = async (req, res) => {
  try {
    const response = await obtenerBarraStatusParaEstadisticasService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al obtener datos del alumno:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const obtenerNumeroAlumnos = async (req, res) => {
  try {
    const response = await obtenerNumeroAlumnosService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al obtener numero de alumnos:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const validarAlumno = async (req, res) => {
  try {
    const response = await validarAlumnoService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al validar alumno:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

export const validarEmpresa = async (req, res) => {
    try {
      const response = await validarEmpresaService(req);
      res.status(201).json({ success: true, data: response });
    } catch (error) {
      console.error("Error al validar empresa:", error.message);
      return res.status(500).json({ success: false, message: error });
    }
  };


  