import express from 'express';
import Empresa from "../../modelos/modeloEmpresa.js";

const modificarDatosDeLaEmpresa = async (req, res) => {
  const { datos, idUsuario } = req.body;
  

  try {
    const resultado = await Empresa.modificarDatosEmpresa(datos, idUsuario);

    return {resultado};
  } catch (error) {
    console.error("Error al añadir datos del alumno:", error);
    throw error;
  }
};

//recuerda añadir el middlware express para validar el body

export default modificarDatosDeLaEmpresa;