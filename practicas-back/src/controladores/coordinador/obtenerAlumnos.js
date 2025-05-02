import express from 'express';
import Alumnos from "../../modelos/modeloAlumno.js";

const obtenerAlumnosFiltrados = async (req) => {
  const carrera = req.query.carrera;
  const busqueda = req.query.busqueda;
  const validada = req.query.validada === 'true' ? 1 
                 : req.query.validada === 'false' ? 0
                 : null;

  try {
    const alumnos = await Alumnos.obtenerAlumnos(
      {
        carrera: carrera, 
        busqueda: busqueda, 
        validado: validada
      }
    );
    return alumnos;
  } catch (error) {
    console.error("Error al obtener todos los alumnos:", error);
    throw error;
  }
};

export default obtenerAlumnosFiltrados;