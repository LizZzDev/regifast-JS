import express from 'express';
import Empresa from "../../modelos/modeloEmpresa.js";

const anadirDatosDeLaEmpresa = async (req, res) => {
    const { file } = req;

    let datos;
    try {
      datos = JSON.parse(req.body.datosEmpresa); 
    } catch (error) {
      throw new Error("Error al parsear datosEmpresa");
    }

    if (file) {
      datos.imagen = file.filename;
    } else {
      datos.imagen = null;
    }

    const idUsuario = null;

    const resultado = await Empresa.añadirEmpresa(datos, idUsuario);
    return resultado;
  };


export default anadirDatosDeLaEmpresa;
