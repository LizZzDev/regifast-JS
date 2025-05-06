import session from "express-session";
import crearUsuarioServicio from './crearUsuario.js';
import inicioSesionServicio from './iniciarSesion.js';
import cerrarSesionServicio from './cerrarSesion.js';

export const iniciarSesion = async (req, res) => {
  try {
    const response = await inicioSesionServicio(req.body);

    // Configurar la sesión
    req.session.log = true;
    req.session.ID = response.id;
    req.session.usuario = response.nombre;
    req.session.correo = response.correo;

    return res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    return res.status(401).json({ success: false, message: error });
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