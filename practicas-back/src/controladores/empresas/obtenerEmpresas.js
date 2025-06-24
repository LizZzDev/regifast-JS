import express from 'express';
import Empresas from "../../modelos/modeloEmpresa.js";

const obtenerEmpresas = async (req) => {
  const pagina = parseInt(req.query.pagina) || 1;
  const limite = parseInt(req.query.limite) || 20;
  const soloConVacantes = req.query.vacantes === 'true';
  const validada = req.query.validada === 1 ? 1 
                 : req.query.validada === 0 ? 0
                 : null;  
  const practicasExtraordinarias = req.query.validada === 1 ? 1 
                 : req.query.validada ===  0 ? 0
                 : null;  

  try {
    const empresas = await Empresas.obtenerEmpresasFiltradas(
      {
        pagina: pagina, 
        limite: limite, 
        validada: validada, 
        soloConVacantes: soloConVacantes,
        practicasExtraordinarias: practicasExtraordinarias
      }
    );
    return empresas;
  } catch (error) {
    console.error("Error al obtener todas las empresas:", error);
    throw error;
  }
};

export default obtenerEmpresas;