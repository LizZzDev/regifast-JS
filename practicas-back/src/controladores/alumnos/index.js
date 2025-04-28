import anadirDatosDelAlumnoService from "./anadirDatosDelAlumno.js";
import obtenerBarraStatusService from "./obtenerBarraStatus.js";
import modificarDatosDelAlumnoService from "./modificarDatosDelAlumno.js";
import postularOfertaEmpresaService from "./postularOfertaEmpresa.js";
import calificarEmpresaSerive from "./calificarEmpresa.js";
import mostrarEmpresaSeleccionadaService from "./mostrarEmpresaSeleccionada.js";

export const anadirDatosDelAlumno = async (req, res) => {
    try {
      const response = await anadirDatosDelAlumnoService(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al agregar datos del alumno:", error.message);
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
  
export const  obtenerBarraStatus = async (req, res) => {
    try {
      const response = await obtenerBarraStatusService(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al obtener barra status:", error.message);
      return res.status(401).json({ success: false, message: error });
    }
  };


export const postularOfertaEmpresa = async (req, res) => {
    try {
      const response = await postularOfertaEmpresaService(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al realizar la postulacion:", error.message);
      return res.status(401).json({ success: false, message: error });
    }
  };
  
export const calificarEmpresa = async (req, res) => {
    try {
      const response = await calificarEmpresaSerive(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al calificar empresa:", error.message);
      return res.status(401).json({ success: false, message: error });
    }
  };

export const mostrarEmpresaSeleccionada = async (req, res) => {
    try {
      const response = await mostrarEmpresaSeleccionadaService(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al mostrar empresa seleccionada:", error.message);
      return res.status(401).json({ success: false, message: error });
    }
  };