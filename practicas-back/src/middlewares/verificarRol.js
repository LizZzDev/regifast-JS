export const soloEmpresa = (req, res, next) => {
  if (req.session?.rol === 'empresa') {
    next();
  } else {
    res.status(403).json({ mensaje: 'Acceso denegado: solo empresas.' });
  }
};

export const soloAlumno = (req, res, next) => {
  if (req.session?.rol === 'alumno') {
    next();
  } else {
    res.status(403).json({ mensaje: 'Acceso denegado: solo alumnos.' });
  }
};

export const soloCoordinador = (req, res, next) => {
  if (req.session?.rol === 'coordinador') {
    next();
  } else {
    res.status(403).json({ mensaje: 'Acceso denegado: solo coordinador.' });
  }
};