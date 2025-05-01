import obtenerEmpresasServicio from "./obtenerEmpresas.js";

export const obtenerEmpresas = async (req, res) => {
    try {
      const response = await obtenerEmpresasServicio(req);
      res.status(201).json({  response });
    } catch (error) {
      console.error("Error al obtener las empresas:", error.message);
      return res.status(401).json({ success: false, message: error.message });
    }
  };
