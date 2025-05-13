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

  export async function modificarDatosAlumno(data) {
    try {
      const response = await axios.post(
        API_BASE_URL + router.COORDINADOR + endpoints.COORDINADOR.MODIFICAR_DATOS_ALUMNO,
        data,
      );
      return manejarRespuesta(response);
    } catch (error) {
      console.error("Error en modificar datos del alumno:", error);
      throw error;
    }
  }