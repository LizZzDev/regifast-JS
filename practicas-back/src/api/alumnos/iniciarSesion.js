const bcrypt = require('bcrypt');
const pool = require('../config/db');

const iniciarSesion = async (req, res) => {
  const { correo, contrasena } = req;

  if (!correo || !contrasena) {
    return res.status(400).send("Datos insuficientes.");
  }

  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE Correo = ?', [correo]);

    if (rows.length === 0) {
      return res.status(401).send("Datos incorrectos.");
    }

    const user = rows[0];
    const match = await bcrypt.compare(contrasena.trim(), user.Contrasena);

    if (match) {
      req.session.log = true;
      req.session.ID = user.IdUsuario;
      req.session.usuario = user.Nombre;
      req.session.correo = user.Correo;
      req.session.codigo = user.Codigo;
      req.session.empresa = user.EmpresaSeleccionada;

      return res.redirect('/alumnos'); // need to change this to the correct route
    } else {
      return res.status(401).send("Datos incorrectos.");
    }

  } catch (error) {
    console.error("Error al iniciar sesion:", error);
    return res.status(500).send("Error del servidor.");
  }
};

module.exports = iniciarSesion;