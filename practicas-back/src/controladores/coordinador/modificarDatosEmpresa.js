import Empresa from "../../modelos/modeloEmpresa";import express from 'express';

const modificarDatosEmpresa = async (req, res) => {
  const { datos, idUsuario } = req.body;
  

  try {
    const resultado = await Empresa.modificarDatosEmpresa(datos, idUsuario);

    return resultado;
  } catch (error) {
    console.error("Error al modificar datos empresa:", error);
    throw error;
  }
};

export default modificarDatosEmpresa;