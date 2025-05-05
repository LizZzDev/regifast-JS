import express from 'express';
import Alumnos from "../../modelos/modeloAlumno.js";

const obtenerAlumnosFiltrados = async (req) => {
  const pagina = parseInt(req.query.pagina) || 1;
  const limite = parseInt(req.query.limite) || 20;
  const carrera = req.query.carrera;
  const busqueda = req.query.busqueda;
  const validada = req.query.validada === 'true' ? 1 
                 : req.query.validada === 'false' ? 0
                 : null;

  try {
    const alumnos = await Alumnos.obtenerAlumnos(
      {
        pagina: pagina, 
        limite: limite, 
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