const validarCampos = () => {
  //faltaba que recibira el next
  return (req, res, next) => {
    const errores = [];

    Object.entries(req.body).forEach(([campo, valor]) => {
      if (valor === undefined || valor === null) {
        errores.push(`El campo '${campo}' es obligatorio.`);
      }
    });

    if (errores.length > 0) {
      return res.status(400).json({ success: false, message: "Datos insuficientes.", errores });
    }

    next();
  };
};

export default validarCampos;