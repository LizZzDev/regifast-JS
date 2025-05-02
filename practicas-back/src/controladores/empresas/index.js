import obtenerEmpresasServicio from "./obtenerEmpresas.js";
import obtenerEmpresaServicio from "./obtenerEmpresa.js";

export const obtenerEmpresas = async (req, res) => {
    try {
      const response = await obtenerEmpresasServicio(req);
      res.status(200).json({  response });
    } catch (error) {
      console.error("Error al obtener las empresas:", error.message);
      return res.status(401).json({ success: false, message: error.message });
    }
  };

export const obtenerEmpresa = async (req, res) => {
    try {
      const response = await obtenerEmpresaServicio(req);
      res.status(200).json({  response });
    } catch (error) {
      console.error("Error al obtener la empresa:", error.message);
      return res.status(401).json({ success: false, message: error.message });
    }
  };



