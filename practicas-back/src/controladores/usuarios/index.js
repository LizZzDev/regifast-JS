import session from "express-session";
import crearUsuarioServicio from './crearUsuario.js';
import inicioSesionServicio from './iniciarSesion.js';
import cerrarSesionServicio from './cerrarSesion.js';
import generarTokenService from './generarToken.js';
import validarTokenService from './validarToken.js';

export const iniciarSesion = async (req, res) => {
  try {
    const response = await inicioSesionServicio(req.body);

    // Configurar la sesión
    req.session.log = true;
    req.session.ID = response.id;
    req.session.usuario = response.nombre;
    req.session.correo = response.correo;
    req.session.rol = response.rol;

    return res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    return res.status(401).json({ success: false, message: error.message });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const response = await crearUsuarioServicio(req.body);
    return res.status(201).json({
      data: response,
    });
  } catch (error) {
    console.error("Error al crear cuenta:", error.message);
    return res.status(401).json({ success: false, message: error.message });
  }
};

export const generarToken = async (req, res) => {
  try {
    const response = await generarTokenService(req.body);
    return res.status(201).json({
      data: response,
    });
  } catch (error) {
    console.error("Error al generar token:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const validarToken = async (req, res) => {
  try {
    const response = await validarTokenService(req.body);
    return res.status(201).json({
      data: response,
    });
  } catch (error) {
    console.error("Error al generar token:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const cerrarSesion = async (req, res) => {
  try {
    const response = await cerrarSesionServicio(req);
    return res.status(200).json({
      message: "Sesión cerrada correctamente",
      data: response,
    });
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

