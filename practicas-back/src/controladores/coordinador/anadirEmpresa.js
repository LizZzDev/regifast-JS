import express from 'express';
import Empresa from "../../modelos/modeloEmpresa.js";

const anadirDatosDeLaEmpresa = async (req, res) => {
  const { datos } = req.body; 
  const connection = null; 
  const idUsuario = null; 

  try {
    const resultado = await Empresa.agregarNuevaEmpresa(connection, datos, idUsuario); 

    return {resultado};
  } catch (error) {
    console.error("Error al añadir datos de la empresa:", error);
    throw error;
  }
};


export default anadirDatosDeLaEmpresa;
