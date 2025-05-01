import axios from 'axios';
import { router, endpoints } from '../constantes/routes.js';

const API_BASE_URL = 'http://localhost:3000'; 

export async function iniciarSesion({ Correo, Contrasena }) {
  try {
    const response = await axios.post( API_BASE_URL + router.USUARIOS + endpoints.INICIAR_SESION,
      { 
        Correo, 
        Contrasena },
      { withCredentials: true } //esto es solo para permitir sesion, usalo en los que necesiten de req.session
    );

    return response.data.data; 
  } catch (error) {
    console.error("Error en iniciarSesion:", error);
    throw error;
  }
}