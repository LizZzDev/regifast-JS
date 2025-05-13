import axios from 'axios';
import { API_BASE_URL, router } from '../constantes/router.js';
import { endpoints } from '../constantes/endpoints.js';

function manejarRespuesta(response) {
  if (response.data?.success) {
    return response.data.data;
  } else {
    throw new Error(response.data?.message || 'Error inesperado en la respuesta del servidor');
  }
}

export async function anadirEmpresa(data) {
  try {
    const response = await axios.post(
      API_BASE_URL + router.COORDINADOR + endpoints.COORDINADOR.ANADIR_EMPRESA,
      data,
      { withCredentials: true }
    );
    return manejarRespuesta(response);
  } catch (error) {
    console.error("Error en añadir empresa:", error);
    throw error;
  }
}

export async function asignarFechaIngresoPorCalificacion(data) {
  try {
    const response = await axios.post(
      API_BASE_URL + router.COORDINADOR + endpoints.COORDINADOR.ASIGNAR_FECHA_INGRESO_POR_CALIFICACIONES,
      data,
      { withCredentials: true }
    );
    return manejarRespuesta(response);
  } catch (error) {
    console.error("Error en asignar fecha de ingreso por calificacion:", error);
    throw error;
  }
}

export async function modificarDatosAlumno(data) {
  try {
    const response = await axios.post(
      API_BASE_URL + router.COORDINADOR + endpoints.COORDINADOR.MODIFICAR_DATOS_ALUMNO,
      data,
      {
        withCredentials: true,
      }
    );
    return manejarRespuesta(response);
  } catch (error) {
    console.error("Error en modificar datos del alumno:", error);
    throw error;
  }
}

export async function obtenerAlumnos() {
  try {
    const response = await axios.get(
      API_BASE_URL + router.COORDINADOR + endpoints.COORDINADOR.OBTENER_ALUMNOS,
    );
    return manejarRespuesta(response);
  } catch (error) {
    console.error("Error en obtener alumnos:", error);
    throw error;
  }
}

export async function obtenerAlumno() {
  try {
    const response = await axios.get(
      API_BASE_URL + router.COORDINADOR + endpoints.COORDINADOR.OBTENER_ALUMNO,
      { withCredentials: true }
    );
    return manejarRespuesta(response);
  } catch (error) {
    console.error("Error en obtener alumno:", error);
    throw error;
  }
}

export async function obtenerBarraStatusParaEstadisticas() {
  try {
    const response = await axios.get(
      API_BASE_URL + router.COORDINADOR + endpoints.COORDINADOR.OBTENER_BARRA_STATUS_PARA_ESTADISTICAS,
      { withCredentials: true }
    );
    return manejarRespuesta(response);
  } catch (error) {
    console.error("Error en obtener barra status para estadisticas", error);
    throw error;
  }
}

export async function validarAlumno(data) {
  try {
    const response = await axios.post(
      API_BASE_URL + router.COORDINADOR + endpoints.COORDINADOR.VALIDAR_ALUMNO,
      data,
      { withCredentials: true }
    );
    return manejarRespuesta(response);
  } catch (error) {
    console.error("Error en validar alumno:", error);
    throw error;
  }
}

export async function validarEmpresa(data) {
  try {
    const response = await axios.post(
      API_BASE_URL + router.COORDINADOR + endpoints.COORDINADOR.VALIDAR_EMPRESA,
      data,
      { withCredentials: true }
    );
    return manejarRespuesta(response);
  } catch (error) {
    console.error("Error en validar empresa:", error);
    throw error;
  }
}

