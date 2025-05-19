import anadirDatosDelAlumnoService from "./anadirDatosDelAlumno.js";
import obtenerBarraStatusService from "./obtenerBarraStatus.js";
import postularOfertaEmpresaService from "./postularOfertaEmpresa.js";
import calificarEmpresaSerive from "./calificarEmpresa.js";
import mostrarEmpresaSeleccionadaService from "./mostrarEmpresaSeleccionada.js";
import obtenerCalificarEmpresaSerive from "./obtenerCalificacionesDeLasEmpresas.js";
import descargarCartaAsignacionService from "./generarCartaAsignacion.js";
import obtenerEmpresasAlumnosService from "./obtenerEmpresasAlumnos.js";
import obtenerEmpresaParaUsuarioService from "./obtenerEmpresaParaAlumno.js";

export const anadirDatosDelAlumno = async (req, res) => {
  try {
    const data = await anadirDatosDelAlumnoService(req);
    res.status(201).json({ success: true, data });
  } catch (error) {
    console.error("Error al agregar datos del alumno:", error.message);
    res.status(500).json({ success: false, message: "Error al agregar datos del alumno" });
  }
};

export const obtenerEmpresasAlumnos = async (req, res) => {
  try {
    const data = await obtenerEmpresasAlumnosService(req);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener barra status:", error.message);
    res.status(500).json({ success: false, message: "Error al obtener barra status" });
  }
};

export const obtenerBarraStatus = async (req, res) => {
  try {
    const data = await obtenerBarraStatusService(req);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener barra status:", error.message);
    res.status(500).json({ success: false, message: "Error al obtener barra status" });
  }
};

export const postularOfertaEmpresa = async (req, res) => {
  try {
    const data = await postularOfertaEmpresaService(req);
    res.status(201).json({ success: true, data });
  } catch (error) {
    console.error("Error al realizar la postulación:", error.message);
    res.status(500).json({ success: false, message: "Error al realizar la postulación" });
  }
};

export const calificarEmpresa = async (req, res) => {
  try {
    const data = await calificarEmpresaSerive(req);
    res.status(201).json({ success: true, data });
  } catch (error) {
    console.error("Error al calificar empresa:", error.message);
    res.status(500).json({ success: false, message: "Error al calificar empresa" });
  }
};

export const obtenerCalificacionesDeLasEmpresas = async (req, res) => {
  try {
    const data = await obtenerCalificarEmpresaSerive(req);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener calificaciones:", error.message);
    res.status(500).json({ success: false, message: "Error al obtener calificaciones" });
  }
};

export const obtenerEmpresaParaUsuario = async (req, res) => {
  try {
    const data = await obtenerEmpresaParaUsuarioService(req);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al obtener empresa:", error.message);
    res.status(500).json({ success: false, message: "Error al obtener empresa" });
  }
};

export const mostrarEmpresaSeleccionada = async (req, res) => {
  try {
    const data = await mostrarEmpresaSeleccionadaService(req);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al mostrar empresa seleccionada:", error.message);
    res.status(500).json({ success: false, message: "Error al mostrar empresa seleccionada" });
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
    res.status(500).json({ success: false, message: "No se pudo generar el documento." });
  }
};
