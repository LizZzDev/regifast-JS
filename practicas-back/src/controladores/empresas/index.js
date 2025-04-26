import obtenerEmpresasService from "../empresas/obtenerEmpresas.js";

export const obtenerEmpresasConVacantes = async (req, res) => {
    try {
      const response = await obtenerEmpresasService.obtenerConVacantes(req);
      res.status(201).json({ mensaje: "Se obtuvieron correctamente las empresas", response });
    } catch (error) {
      console.error("Error al obtener las empresas:", error.message);
      return res.status(401).json({ success: false, message: error.message });
    }
  };

  export const obtenerTodas = async (req, res) => {
    try {
      const response = await obtenerEmpresasService.obtenerTodas(req);
      res.status(201).json({ mensaje: "Se obtuvieron correctamente las empresas", response });
    } catch (error) {
      console.error("Error al obtener las empresas:", error.message);
      return res.status(401).json({ success: false, message: error.message });
    }
  };
  
