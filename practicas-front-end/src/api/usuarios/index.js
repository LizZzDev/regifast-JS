import axios from 'axios';
import { API_BASE_URL, router  } from '../constantes/router.js';
import { endpoints } from '../constantes/endpoints.js';

export async function iniciarSesion({ correo, contrasena }) {
  try {
    const response = await axios.post( API_BASE_URL + router.USUARIOS + endpoints.USUARIOS.INICIAR_SESION,
      { 
        correo, 
        contrasena },
      { withCredentials: true }
    );

    return response.data.data; 
  } catch (error) {
    console.error("Error en iniciarSesion:", error);
    throw error;
  }
}

export async function crearUsuario({ correo, contrasena, nombre, rol, datosEmpresa, datosJefeDepartamento }) {
  try {
    const response = await axios.post( API_BASE_URL + router.USUARIOS + endpoints.USUARIOS.CREAR_USUARIO,
      { 
        correo, 
        contrasena, 
        nombre, 
        rol, 
        datosEmpresa, 
        datosJefeDepartamento },
    );

    return response.data.data; 
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
}