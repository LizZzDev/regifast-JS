import express from 'express';
import Empresas from "../../modelos/modeloEmpresa.js";

const obtenerEmpresasAlumnos = async (req) => {
  const pagina = parseInt(req.query.pagina) || 1;
  const limite = parseInt(req.query.limite) || 20;
  const idUsuario = req.query.idUsuario;
  const validada = 1;
  const soloConVacantes = req.query.vacantes === 'true';

  try {
    const alumno = await Alumno.obtenerAlumno(idUsuario);
    const empresas = await Empresas.obtenerEmpresasFiltradas(
      {
        pagina: pagina, 
        limite: limite, 
        validada: validada, 
        soloConVacantes: soloConVacantes,
        practicasOrdinariasNoOrdinarias: alumno.Ordinario,
        carrera: alumno.Carrera
      }
    );

    return empresas;
  } catch (error) {
    console.error("Error al obtener todas las empresas para los alumnos:", error);
    throw error;
  }
};

export default obtenerEmpresasAlumnos;