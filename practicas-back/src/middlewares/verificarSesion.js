export const verificarSesion = (req, res, next) => {
  if (req.session && req.session.usuario) {
    next();
  } else {
    res.status(401).json({ mensaje: 'No autorizado. Inicie sesión.' });
  }
};