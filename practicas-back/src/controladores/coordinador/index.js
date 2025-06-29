import modificarDatosDelAlumnoService from "./modificarDatosDelAlumno.js";
import obtenerAlumnosService from "./obtenerAlumnos.js";
import obtenerAlumnoService from "./obtenerAlumno.js";
import validarAlumnoService from "./validarAlumno.js";
import validarEmpresaService from "./validarEmpresa.js";
import revertirValidacionAlumnoService from "./revertirValidacionAlumno.js";
import obtenerBarraStatusParaEstadisticasService from "./obtenerBarraStatusParaEstadisticas.js";
import anadirEmpresaService from "./anadirEmpresa.js";
import asignarFechaIngresoPorCalificacionesService from "./asignarFechaIngresoPorCalificaciones.js";
import obtenerNumeroAlumnosService from "./obtenerNumeroAlumnos.js";
import eliminarAlumnoService from "./eliminarAlumno.js";
import modificarDatosEmpresaService from './modificarDatosEmpresa.js'
import eliminarEmpresaService from './eliminarEmpresa.js';
import revertirValidacionEmpresaService from "./revertirValidacionEmpresa.js";
import obtenerFechasParaPostularseEmpresasService from "./obtenerFechas.js";

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


export const obtenerFechasParaPostularseEmpresas = async (req, res) => {
  try {
    const response = await obtenerFechasParaPostularseEmpresasService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al obtener fechas:", error.message);
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

export const revertirValidacionAlumno = async (req, res) => {
  try {
    const response = await revertirValidacionAlumnoService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al revertir la validacion del alumno:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};


  export const eliminarAlumno = async (req, res) => {
    try {
      const response = await eliminarAlumnoService(req);
      res.status(201).json({ data: response });
    } catch (error) {
      console.error("Error al eliminar alumno:", error.message);
      return res.status(500).json({ success: false, message: error });
    }
  };

  
  export const anadirEmpresa = async (req, res) => {
  try {
    const response = await anadirEmpresaService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al añadir empresa:", error.message);
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

  export const revertirValidacionEmpresa = async (req, res) => {
  try {
    const response = await revertirValidacionEmpresaService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al revertir la validacion de la empresa:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

    export const eliminarEmpresa = async (req, res) => {
    try {
      console.log (req);
      const response = await eliminarEmpresaService(req);
      res.status(201).json({ data: response });
    } catch (error) {
      console.error("Error al eliminar empresa:", error.message);
      return res.status(500).json({ success: false, message: error });
    }
  };

export const modificarDatosEmpresa = async (req, res) => {
  try {
    const response = await modificarDatosEmpresaService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al modificar datos de la empresa:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};