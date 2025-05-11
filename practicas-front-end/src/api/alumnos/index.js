import axios from 'axios';
import { API_BASE_URL, router  } from '../constantes/router.js';
import { endpoints } from '../constantes/endpoints.js';

export async function anadirDatosDelAlumno(data) {
    try {
      const response = await axios.post( API_BASE_URL + router.ALUMNOS + endpoints.ALUMNOS.AÑADIR_DATOS,
        { 
          data 
        },
        { withCredentials: true }
      );
  
      return response.data.data; 
    } catch (error) {
      console.error("Error en añadir datos del alumno:", error);
      throw error;
    }
  }

export async function calificarEmpresa(data) {
    try {
      const response = await axios.post( API_BASE_URL + router.ALUMNOS + endpoints.ALUMNOS.CALIFICAR_EMPRESA,
        { 
          data 
        },
        { withCredentials: true }
      );
  
      return response.data.data; 
    } catch (error) {
      console.error("Error en añadir datos del alumno:", error);
      throw error;
    }
  }