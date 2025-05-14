  import { router } from '../constantes/router.js';
  import { endpoints } from '../constantes/endpoints.js';
  import api from '../auxiliares/manejarCatch.js';

  export async function anadirDatosDelAlumno(data) {
    try {
      const response = await api.post(
        router.ALUMNOS + endpoints.ALUMNOS.AÑADIR_DATOS,
        data,
      );
      return response.data.data;;
    } catch (error) {
      console.error("Error en añadir datos del alumno:", error);
      throw error;
    }
  }

  export async function calificarEmpresa(data) {
    try {
      const response = await api.post(
        router.ALUMNOS + endpoints.ALUMNOS.CALIFICAR_EMPRESA,
        data,
      );
      return response.data.data;;
    } catch (error) {
      console.error("Error en calificar empresa:", error);
      throw error;
    }
  }

  export async function generarCartaAsignacion(idUsuario) {
    try {
      const response = await api.get(
        router.ALUMNOS + endpoints.ALUMNOS.GENERAR_CARTA_ASIGNACION,
        {
          params: { idUsuario },
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
      const response = await api.get(
        router.ALUMNOS + endpoints.ALUMNOS.MOSTRAR_EMPRESA_SELECCIONADA,
      );
      return response.data.data;;
    } catch (error) {
      console.error("Error en mostrar empresa seleccionada:", error);
      throw error;
    }
  }

  export async function obtenerBarraStatus() {
    try {
      const response = await api.get(
        router.ALUMNOS + endpoints.ALUMNOS.OBTENER_BARRA_STATUS,
      );
      return response.data.data;;
    } catch (error) {
      console.error("Error en obtener barra status:", error);
      throw error;
    }
  }

  export async function obtenerCalificacionesEmpresa () {
    try {
      const response = await api.get(
        router.ALUMNOS + endpoints.ALUMNOS.OBTENER_CALIFICACIONES_DE_LA_EMPRESA,
      );
      return response.data.data;;
    } catch (error) {
      console.error("Error en obtener calificaciones de las empresas:", error);
      throw error;
    }
  }

  export async function postularOfertaEmpresa(data) {
    try {
      const response = await api.post(
        router.ALUMNOS + endpoints.ALUMNOS.POSTULAR_OFERTA_EMPRESA,
        data,
      );
      return response.data.data;;
    } catch (error) {
      console.error("Error en postular oferta empresa:", error);
      throw error;
    }
  }
