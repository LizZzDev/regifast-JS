import express from 'express';
import Empresas from "../../modelos/modeloEmpresa.js";

export const obtenerTodasLasEmpresas = async () => {
  try {
    const empresas = await Empresas.obtenerEmpresas(false);
    return empresas;
  } catch (error) {
    console.error("Error al obtener todas las empresas:", error);
    throw error;
  }
};
