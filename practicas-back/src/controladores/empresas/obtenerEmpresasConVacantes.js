import Empresas from "../../modelos/modeloEmpresa.js";

const obtenerEmpresasConVacantes = async () => {
  try {
    const empresas = await Empresas.obtenerEmpresas(true);
    return empresas;
  } catch (error) {
    console.error("Error al obtener empresas con vacantes:", error);
    throw error;
  }
};

export default obtenerEmpresasConVacantes;