import Empresa from "../../modelos/modeloEmpresa.js";

const modificarDatosEmpresa = async (req, res) => {
  const { datos, idEmpresa } = req.body;

  try {
    const resultado = await Empresa.modificarDatosEmpresa(datos, idEmpresa);

    return resultado;
  } catch (error) {
    console.error("Error al modificar datos empresa:", error);
    throw error;
  }
};

export default modificarDatosEmpresa;