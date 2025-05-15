import obtenerEmpresasServicio from "./obtenerEmpresas.js";
import obtenerEmpresaServicio from "./obtenerEmpresa.js";
import crearEmpresaServicio from "./crearEmpresa.js";
import modificarDatosEmpresaService from "./modificarDatosEmpresa.js";

export const obtenerEmpresas = async (req, res) => {
    try {
      const response = await obtenerEmpresasServicio(req);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      console.error("Error al obtener las empresas:", error.message);
      return res.status(500).json({ success: false, message: error.message });
    }
  };

export const obtenerEmpresa = async (req, res) => {
    try {
      const response = await obtenerEmpresaServicio(req);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      console.error("Error al obtener la empresa:", error.message);
      return res.status(500).json({ success: false, message: error.message });
    }
  };

export const crearEmpresa = async (req, res) => {
  try {
    const file = req.file;
    const body = req.body;

    if (body.rol === 'empresa' && file) {
      body.datosEmpresa = {
        ...JSON.parse(body.datosEmpresa),
        imagen: file.filename,
      };
    }
    const response = await crearEmpresaServicio(req.body);
    return res.status(201).json({success: true, data: response });
  } catch (error) {
    console.error("Error al crear empresa:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};


export const modificarDatosEmpresa = async (req, res) => {
  try {
    const response = await modificarDatosEmpresaService(req);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.error("Error al modificar datos de la empresa:", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};

