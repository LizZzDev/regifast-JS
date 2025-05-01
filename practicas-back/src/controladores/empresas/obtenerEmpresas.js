import express from 'express';
import Empresas from "../../modelos/modeloEmpresa.js";

const obtenerEmpresas = async (req) => {
  const pagina = parseInt(req.query.pagina) || 1;
  const limite = parseInt(req.query.limite) || 10;
  const validada = req.query.validada === 'true' ? 1 
                 : req.query.validada === 'false' ? 2 
                 : null;
  const soloConVacantes = req.query.vacantes === 'true';

  try {
    const empresas = await Empresas.obtenerEmpresasFiltradas(
      {
        pagina: pagina, 
        limite: limite, 
        validada: validada, 
        soloConVacantes: soloConVacantes
      }
    );
    return empresas;
  } catch (error) {
    console.error("Error al obtener todas las empresas:", error);
    throw error;
  }
};

export default obtenerEmpresas;