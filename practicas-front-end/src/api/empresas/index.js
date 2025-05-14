import axios from 'axios';
import { API_BASE_URL, router  } from '../constantes/router.js';
import { endpoints } from '../constantes/endpoints.js';


export async function crearEmpresa(formData) {
  try {
    const response = await axios.post( API_BASE_URL + router.EMPRESAS + endpoints.EMPRESAS.CREAR_EMPRESA,
      formData,
    );

    return response.data.data; 
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
}