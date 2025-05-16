import { router } from '../constantes/router.js';
import { endpoints } from '../constantes/endpoints.js';
import api from '../auxiliares/manejarCatch.js';

export async function anadirEmpresa(data) {
  try {
    const response = await api.post(
      router.COORDINADOR + endpoints.COORDINADOR.ANADIR_EMPRESA,
      data,
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en añadir empresa:", error);
    throw error;
  }
}

export async function asignarFechaIngresoPorCalificacion(data) {
  try {
    const response = await api.post(
       router.COORDINADOR + endpoints.COORDINADOR.ASIGNAR_FECHA_INGRESO_POR_CALIFICACIONES,
      data,
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en asignar fecha de ingreso por calificacion:", error);
    throw error;
  }
}

export async function modificarDatosAlumno(data) {
  try {
    const response = await api.put(
       router.COORDINADOR + endpoints.COORDINADOR.MODIFICAR_DATOS_ALUMNO,
      data,
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en modificar datos del alumno:", error);
    throw error;
  }
}

export async function obtenerAlumnos() {
  try {
    const response = await api.get(
       router.COORDINADOR + endpoints.COORDINADOR.OBTENER_ALUMNOS,
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en obtener alumnos:", error);
    throw error;
  }
}

export async function obtenerAlumno() {
  try {
    const response = await api.get(
       router.COORDINADOR + endpoints.COORDINADOR.OBTENER_ALUMNO,
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en obtener alumno:", error);
    throw error;
  }
}

export async function obtenerBarraStatusParaEstadisticas() {
  try {
    const response = await api.get(
       router.COORDINADOR + endpoints.COORDINADOR.OBTENER_BARRA_STATUS_PARA_ESTADISTICAS,
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en obtener barra status para estadisticas", error);
    throw error;
  }
}

export async function validarAlumno(idUsuario) {
  try {
    const response = await api.put(
       router.COORDINADOR + endpoints.COORDINADOR.VALIDAR_ALUMNO,
      { idUsuario: idUsuario }
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en validar alumno:", error);
    throw error;
  }
}

export async function validarEmpresa(idUsuario) {
  try {
    const response = await api.put(
       router.COORDINADOR + endpoints.COORDINADOR.VALIDAR_EMPRESA,
      { idUsuario: idUsuario }
    );

    console.log (idUsuario, response)
    return response.data.data;;
  } catch (error) {
    console.error("Error en validar empresa:", error);
    throw error;
  }
}

