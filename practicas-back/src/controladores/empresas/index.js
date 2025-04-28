import obtenerEmpresasServicio from "./obtenerEmpresas.js";
import obtenerEmpresasConVacantesServicio from "./obtenerEmpresasConVacantes.js";

export const obtenerEmpresasConVacantes = async (req, res) => {
    try {
      const response = await obtenerEmpresasConVacantesServicio();
      res.status(201).json({  response });
    } catch (error) {
      console.error("Error al obtener las empresas:", error.message);
      return res.status(401).json({ success: false, message: error.message });
    }
  };

  export const obtenerTodas = async (req, res) => {
    try {
      const response = await obtenerEmpresasServicio();
      res.status(201).json({  response });
    } catch (error) {
      console.error("Error al obtener las empresas:", error.message);
      return res.status(401).json({ success: false, message: error.message });
    }
  };
  
