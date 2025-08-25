import express from 'express';
import Alumnos from "../../modelos/modeloAlumno.js";
import Jefe from "../../modelos/modeloJefeDepartamento.js";

const obtenerAlumnosFiltrados = async (req) => {

  console.log (req.query)
  const pagina = parseInt(req.query.pagina) || 1;
  const limite = parseInt(req.query.limite) || 30;
  const ciclo = req.query.ciclo;
  let carrera = req.query.carrera;
  const grado = parseInt(req.query.grado);
  const grupo = req.query.grupo;
  const turno = req.query.turno;
  const ordinario = req.query.ordinario === '1' ? 1 
                 : req.query.ordinario === '0' ? 0
                 : null;  
  const busqueda = req.query.busqueda;
  const inicialAlumno = req.query.inicialNombre;
  const validada = req.query.validado === '1' ? 1 
                 : req.query.validado === '0' ? 0
                 : null;
  const calificacion = req.query.estadoNumerico === 'true' ? true
                 : req.query.estadoNumerico === 'false' ? false
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
        inicialAlumno: inicialAlumno,
        ciclo: ciclo,
        carrera: carrera, 
        grado: grado, 
        grupo: grupo, 
        turno: turno, 
        busqueda: busqueda, 
        validado: validada,
        ordinario: ordinario,
        calificacion
      }
    );

    return alumnos;
  } catch (error) {
    console.error("Error al obtener todos los alumnos:", error);
    throw error;
  }
};

export default obtenerAlumnosFiltrados;