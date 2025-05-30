import express from 'express';
import Alumno from "../../modelos/modeloAlumno.js";

const anadirDatosDelAlumno = async (req, res) => {
  const idUsuario = req.session.ID;

  try {
    const datos = {
      ...req.body,
      BarraStatus: 1
    };

    console.log (datos)

    const resultado = await Alumno.añadirDatosAlumnoModificando(datos, idUsuario);

    console.log (resultado);
    return resultado;
  } catch (error) {
    console.error("Error al añadir datos del alumno:", error);
    throw error;
  }
};

//recuerda añadir el middlware express para validar el body

export default anadirDatosDelAlumno;
