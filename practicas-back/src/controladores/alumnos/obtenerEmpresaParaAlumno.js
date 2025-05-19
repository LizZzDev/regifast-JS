import express from 'express';
import Empresas from "../../modelos/modeloEmpresa.js";

const obtenerEmpresa = async (req) => {
  const pagina = parseInt(req.query.pagina) || 1;
  const limite = parseInt(req.query.limite) || 20;
  const validada = req.query.validada === 'true' ? 1 
                 : req.query.validada === 'false' ? 0
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

export default obtenerEmpresa;