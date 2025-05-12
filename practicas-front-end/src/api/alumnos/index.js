  import axios from 'axios';
  import { API_BASE_URL, router } from '../constantes/router.js';
  import { endpoints } from '../constantes/endpoints.js';

  // Función auxiliar para manejar respuestas estándar
  function manejarRespuesta(response) {
    if (response.data?.success) {
      return response.data.data;
    } else {
      throw new Error(response.data?.message || 'Error inesperado en la respuesta del servidor');
    }
  }

  export async function anadirDatosDelAlumno(data) {
    try {
      const response = await axios.post(
        API_BASE_URL + router.ALUMNOS + endpoints.ALUMNOS.AÑADIR_DATOS,
        data,
        { withCredentials: true }
      );
      return manejarRespuesta(response);
    } catch (error) {
      console.error("Error en añadir datos del alumno:", error);
      throw error;
    }
  }

  export async function calificarEmpresa(data) {
    try {
      const response = await axios.post(
        API_BASE_URL + router.ALUMNOS + endpoints.ALUMNOS.CALIFICAR_EMPRESA,
        data,
        { withCredentials: true }
      );
      return manejarRespuesta(response);
    } catch (error) {
      console.error("Error en calificar empresa:", error);
      throw error;
    }
  }

  export async function generarCartaAsignacion(idUsuario) {
    try {
      const response = await axios.get(
        API_BASE_URL + router.ALUMNOS + endpoints.ALUMNOS.GENERAR_CARTA_ASIGNACION,
        {
          params: { idUsuario },
          withCredentials: true,
          responseType: 'blob', 
        }
      );
      return response.data; 
    } catch (error) {
      console.error("Error en generar carta de asignación:", error);
      throw error;
    }
  }

  export async function mostrarEmpresaSeleccionada() {
    try {
      const response = await axios.get(
        API_BASE_URL + router.ALUMNOS + endpoints.ALUMNOS.MOSTRAR_EMPRESA_SELECCIONADA,
        { withCredentials: true }
      );
      return manejarRespuesta(response);
    } catch (error) {
      console.error("Error en mostrar empresa seleccionada:", error);
      throw error;
    }
  }

  export async function obtenerBarraStatus() {
    try {
      const response = await axios.get(
        API_BASE_URL + router.ALUMNOS + endpoints.ALUMNOS.OBTENER_BARRA_STATUS,
        { withCredentials: true }
      );
      return manejarRespuesta(response);
    } catch (error) {
      console.error("Error en obtener barra status:", error);
      throw error;
    }
  }

  export async function obtenerCalificacionesEmpresa () {
    try {
      const response = await axios.get(
        API_BASE_URL + router.ALUMNOS + endpoints.ALUMNOS.OBTENER_CALIFICACIONES_DE_LA_EMPRESA,
        { withCredentials: true }
      );
      return manejarRespuesta(response);
    } catch (error) {
      console.error("Error en obtener calificaciones de las empresas:", error);
      throw error;
    }
  }

  export async function postularOfertaEmpresa(data) {
    try {
      const response = await axios.post(
        API_BASE_URL + router.ALUMNOS + endpoints.ALUMNOS.POSTULAR_OFERTA_EMPRESA,
        data,
        { withCredentials: true }
      );
      return manejarRespuesta(response);
    } catch (error) {
      console.error("Error en postular oferta empresa:", error);
      throw error;
    }
  }
