import express from 'express';
import Empresa from "../../modelos/modeloEmpresa.js";

const anadirDatosDeLaEmpresa = async (req, res) => {
  const { datos } = req.body; 
  const { Correo } = datos; 
  const connection = null; 
  const idUsuario = null; 

  try {
    console.log (Correo)
    const resultado = await Empresa.agregarNuevaEmpresa(connection, datos, idUsuario, Correo); 

    return resultado;
  } catch (error) {
    console.error("Error al añadir datos de la empresa:", error);
    throw error;
  }
};


export default anadirDatosDeLaEmpresa;
