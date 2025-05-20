import { API_BASE_URL, router  } from '../constantes/router.js';
import { endpoints } from '../constantes/endpoints.js';
import api from '../auxiliares/manejarCatch.js';

export async function crearEmpresa(formData) {
  try {
    const response = await api.post( router.EMPRESAS + endpoints.EMPRESAS.CREAR_EMPRESA,
      formData,
    );

    return response.data.data;; 
  } catch (error) {
    console.error("Error al crear empresa:", error);
    throw error;
  }
}

export async function obtenerEmpresas({ pagina = 1, limite = 20, validada = null, vacantes = false } = {}) {
  try {
    const params = {
      pagina,
      limite,
      ...(validada !== null && { validada }), 
      ...(vacantes && { vacantes: true })
    };

    const response = await api.get(
      router.EMPRESAS + endpoints.EMPRESAS.OBTENER_EMPRESAS,
      { params }
    );

    return response.data.data;; 
  } catch (error) {
    console.error("Error al obtener empresas:", error);
    throw error;
  }
}

export async function obtenerEmpresa(idEmpresa) {
  try {
     const params = {};
    if (idEmpresa !== undefined && idEmpresa !== null) {
      params.idEmpresa = idEmpresa;
    }
    const response = await api.get(
      router.EMPRESAS + endpoints.EMPRESAS.OBTENER_EMPRESA,
      { params}    
    );
    return response.data.data;; 
  } catch (error) {
    console.error("Error al obtener empresa:", error);
    throw error;
  }
}

export async function modificarDatosEmpresa(data) {
  try {
    const response = await api.put(
      router.EMPRESAS + endpoints.EMPRESAS.MODIFICAR_EMPRESA,
      data
    );

    console.log (response)
    return response.data.data;; 
  } catch (error) {
    console.error("Error al obtener empresa:", error);
    throw error;
  }
}