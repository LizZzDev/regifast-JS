import { router  } from '../constantes/router.js';
import { endpoints } from '../constantes/endpoints.js';
import api from '../auxiliares/manejarCatch.js';

export async function iniciarSesion({ correo, contrasena }) {
  try {
    const response = await api.post(router.USUARIOS + endpoints.USUARIOS.INICIAR_SESION,
      { 
        correo, 
        contrasena },
    );
    return response.data.data;; 
  } catch (error) {
    console.error("Error en iniciarSesion:", error);
    throw error;
  }
}

export async function crearUsuario({ correo, contrasena, nombre, rol, datosJefeDepartamento }) {
  try {
    console.log (rol);
    const response = await api.post(router.USUARIOS + endpoints.USUARIOS.CREAR_USUARIO,
      { 
        correo, 
        contrasena, 
        nombre, 
        rol, 
        datosJefeDepartamento },
    );

    return response.data.data;; 
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
}

export async function generarToken(correo) {
  try {
    const response = await api.post(router.USUARIOS + endpoints.USUARIOS.GENERAR_TOKEN,
      { correo: correo }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error en generar token:", error);
    throw error;
  }
}

export async function validarToken(correo, token ) {
  try {
    const response = await api.post(router.USUARIOS + endpoints.USUARIOS.VALIDAR_TOKEN,
      { 
        correo: correo, 
        token: token },
    );

    return response.data.data;
  } catch (error) {
    console.error("Error en validar token:", error);
    throw error;
  }
}

export async function verificarSesion (rolEsperado) {
  try {
    const response = await api.get(
       router.USUARIOS + endpoints.USUARIOS.VERIFICAR_SESION,
        { params: 
          {
            rolEsperado: rolEsperado,
          }
       }

    );
    return response.data.data;
  } catch (error) {
        console.error('Error al verificar sesion', error);
        throw error;
    }
}

export async function generarTokenRecuperarContrasena(correo) {
  try {
    const response = await api.post(router.USUARIOS + endpoints.USUARIOS.GENERAR_RECUPERAR_CONTRASEÑA,
      { correo: correo }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error en generar token:", error);
    throw error;
  }
}

export async function obtenerSiHayToken(token) {
  try {
    const response = await api.get(router.USUARIOS + endpoints.USUARIOS.OBTENER_SI_HAY_TOKEN,
       {params: { token }}
    );

    return response.data.data;
  } catch (error) {
    console.error("Error en obtener si existe el token:", error);
    throw error;
  }
}

export async function restablecerContrasena(nuevaContrasena, token) {
  try {
    const response = await api.put(router.USUARIOS + endpoints.USUARIOS.RESTABLECER_CONTRA,
      { nuevaContrasena: nuevaContrasena,
        token: token
       }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error en generar token:", error);
    throw error;
  }
}

export async function cerrarSesion() {
  try {
    const response = await api.post(router.USUARIOS + endpoints.USUARIOS.CERRAR_SESION);

    return response.data.data;; 
  } catch (error) {
    console.error("Error en iniciarSesion:", error);
    throw error;
  }
}
