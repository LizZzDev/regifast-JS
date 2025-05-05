import anadirDatosDelAlumnoService from "./anadirDatosDelAlumno.js";
import obtenerBarraStatusService from "./obtenerBarraStatus.js";
import postularOfertaEmpresaService from "./postularOfertaEmpresa.js";
import calificarEmpresaSerive from "./calificarEmpresa.js";
import mostrarEmpresaSeleccionadaService from "./mostrarEmpresaSeleccionada.js";
import obtenerCalificarEmpresaSerive from "./obtenerCalificacionesDeLasEmpresas.js";
import descargarCartaAsignacionService from "./generarCartaAsignacion.js";

export const anadirDatosDelAlumno = async (req, res) => {
    try {
      const response = await anadirDatosDelAlumnoService(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al agregar datos del alumno:", error.message);
      return res.status(500).json({ success: false, message: error });
    }
  };

  
export const  obtenerBarraStatus = async (req, res) => {
    try {
      const response = await obtenerBarraStatusService(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al obtener barra status:", error.message);
      return res.status(500).json({ success: false, message: error });
    }
  };


export const postularOfertaEmpresa = async (req, res) => {
    try {
      const response = await postularOfertaEmpresaService(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al realizar la postulacion:", error.message);
      return res.status(500).json({ success: false, message: error });
    }
  };
  
export const calificarEmpresa = async (req, res) => {
    try {
      const response = await calificarEmpresaSerive(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al calificar empresa:", error.message);
      return res.status(500).json({ success: false, message: error });
    }
  };

export const obtenerCalificacionesDeLasEmpresas = async (req, res) => {
    try {
      const response = await obtenerCalificarEmpresaSerive(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al obtener calificar empresa:", error.message);
      return res.status(500).json({ success: false, message: error });
    }
  };

export const mostrarEmpresaSeleccionada = async (req, res) => {
    try {
      const response = await mostrarEmpresaSeleccionadaService(req);
      res.status(201).json({ response });
    } catch (error) {
      console.error("Error al mostrar empresa seleccionada:", error.message);
      return res.status(500).json({ success: false, message: error });
    }
  };

export const generarCartaAsignacion = async (req, res) => {
    try {
        const documentoBuffer = await descargarCartaAsignacionService(req);
        
        res.setHeader('Content-Disposition', 'attachment; filename="CartaAsignacion.docx"');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        res.send(documentoBuffer);
    } catch (error) {
        console.error("Error al generar carta de asignación:", error.message);
        return res.status(500).json({ success: false, message: "No se pudo generar el documento." });
    }
};