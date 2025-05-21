import express from 'express';
import Alumnos from "../../modelos/modeloAlumno.js";
import Jefe from "../../modelos/modeloJefeDepartamento.js";

const obtenerAlumnosFiltrados = async (req) => {
  const pagina = parseInt(req.query.pagina) || 1;
  const limite = parseInt(req.query.limite) || 20;
  let carrera = req.query.carrera;
  const busqueda = req.query.busqueda;
  const validada = req.query.validada === 'true' ? 1 
                 : req.query.validada === 'false' ? 0
                 : null;
  try {
    if (req.session.rol === "jefeDepartamento") {
        const carreraJefe = await Jefe.obtenerJefe(req.session.ID);
        carrera = carreraJefe?.Carrera;
    }

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