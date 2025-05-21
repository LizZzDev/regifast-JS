  import { router } from '../constantes/router.js';
  import { endpoints } from '../constantes/endpoints.js';
  import api from '../auxiliares/manejarCatch.js';

  export async function anadirDatosDelAlumno(formData) {
    try {
      const response = await api.post(
        router.ALUMNOS + endpoints.ALUMNOS.AÑADIR_DATOS,
        formData,
      );
      console.log (formData);
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
      return response.data.data;
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

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'CartaAsignacion.docx');
      document.body.appendChild(link);
      link.click();
      link.remove();

    } catch (error) {
      console.error("Error en generar carta de asignación:", error);
      alert("Hubo un error al generar el documento.");
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

  export async function obtenerCalificacionesEmpresa (id=null) {
    try {
      console.log (id);
      const response = await api.get(
        router.ALUMNOS + endpoints.ALUMNOS.OBTENER_CALIFICACIONES_DE_LA_EMPRESA,
        {
          params: {
          id: id, 
        }
        }
      );
      return response.data.data;;
    } catch (error) {
      console.error("Error en obtener calificaciones de las empresas:", error);
      throw error;
    }
  }

  export async function obtenerEmpresasParaUsuario({ pagina = 1, limite = 20, validada = null, vacantes = false } = {}, redirigirSiError = true) {
    try {
      const params = {
        pagina,
        limite,
        ...(validada !== null && { validada }), 
        ...(vacantes && { vacantes: true })
      };

      const response = await api.get(
        router.ALUMNOS + endpoints.ALUMNOS.OBTENER_EMPRESAS_PARA_USUARIO,
        { params }
      );

      console.log (response)
      return response.data.data;; 
    } catch (error) {
      console.log (error)
      if (error.response?.status === 409 && redirigirSiError) {
        alert("No tienes acceso a este apartado");
        window.location.href = '/alumno/principal';
    }

      console.error("Error al obtener empresas:", error);
      throw error;
    }
  }

    export async function obtenerEmpresaParaUsuario (idUsuario) {
    try {
      console.log (idUsuario);
      const params = {};
      if (idUsuario !== undefined && idUsuario !== null) {
        params.idUsuario = idUsuario;
      }
      const response = await api.get(
        router.ALUMNOS + endpoints.ALUMNOS.OBTENER_EMPRESA_PARA_USUARIO,
        {
          params 
        }
      );
      return response.data.data;;
    } catch (error) {
      console.error("Error en obtener calificaciones de las empresas:", error);
      throw error;
    }
  }

  export async function postularOfertaEmpresa(IdEmpresa) {
    try {
      const response = await api.put(
        router.ALUMNOS + endpoints.ALUMNOS.POSTULAR_OFERTA_EMPRESA,
        {IdEmpresa: IdEmpresa},
      );
      return response.data.data;;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }

      console.error("Error en postular oferta empresa:", error);
      throw error;
    }
  }
