const crearUsuarioServicio = require("./crearUsuario");
const inicioSesionServicio = require("./iniciarSesion");

const iniciarSesion = async (req, res) => {
  const { correo, contrasena } = req.body;
  if (!correo || !contrasena) {
    return res.status(400).json({ success: false, message: "Datos insuficientes." });
  }

  try {
     const response = await inicioSesionServicio(correo, contrasena);

    // Configurar la sesión
    req.session.log = true;
    req.session.ID = response.id;
    req.session.usuario = response.nombre;
    req.session.correo = response.correo;

    return response;
    } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
        return res.status(401).json({ success: false, message: error.message });
    }
};

const crearUsuario = async (req, res) => {
  const { correo, contrasena, rol, empresas } = req.body;
  if (!correo || !contrasena || !rol || !empresas) {
    return res.status(400).json({ success: false, message: "Datos insuficientes." });
  }

  try {
     const response = await crearUsuarioServicio(req.body);
    return response;
    } catch (error) {
        console.error("Error al crear cuenta:", error.message);
        return res.status(401).json({ success: false, message: error.message });
    }
};

const cerrarSesion = async (req, res) => {
  try {
      const response = await cerrarSesion(req);
      return response;
  } catch (error) {
        console.error("Error al cerrar sesion:", error.message);
        return res.status(401).json({ success: false, message: error.message });
  }
};


module.exports = {
    iniciarSesion,
    crearUsuario,
    cerrarSesion
};