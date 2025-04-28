import express from 'express';
import Alumno from "../../modelos/modeloAlumno.js";

const modificarDatosDelAlumno = async (req, res) => {
  const idUsuario = req.session.ID;
  const datos = req.body; 

  try {
    const resultado = await Alumno.modificarDatosAlumno(datos, idUsuario);

    return {resultado};
  } catch (error) {
    console.error("Error al añadir datos del alumno:", error);
    throw error;
  }
};

//recuerda añadir el middlware express para validar el body

export default modificarDatosDelAlumno;