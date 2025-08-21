const VerificarSesion = (req) => {
  const { rolEsperado } = req.query;
    if (!req.session.ID || !req.session.rol) {
      return ({ sesionValida: false, message: "No existe sesion"});
    }

    if (rolEsperado && req.session.rol !== rolEsperado) {
        return ({ sesionValida: false, message: "Acceso no autorizado"});
    }

    return ({ sesionValida: true});
};

export default VerificarSesion;
