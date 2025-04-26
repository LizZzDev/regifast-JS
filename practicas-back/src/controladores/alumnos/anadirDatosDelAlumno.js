import express from 'express';
import Alumno from "../../modelos/modeloAlumno.js";

const anadirDatosDelAlumno = async (req, res) => {
  const correo = req.session.correo;
  const idUsuario = req.session.ID;

  try {

    const datos = {
      ...req.body,
      CorreoInstitucional: correo,
      IdUsuario: idUsuario,
    };

    const resultado = await Alumno.agregarNuevoAlumno(datos);

    return {resultado};
  } catch (error) {
    console.error("Error al añadir datos del alumno:", error);
    throw error;
  }
};

export default anadirDatosDelAlumno;