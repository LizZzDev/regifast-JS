import Alumnos from "../../modelos/modeloAlumno.js";

const obtenerAlumnosFiltrados = async (req) => {
  const carrera = req.query.carrera || null;

  try {
    const response = await Alumnos.barraStatusAlumnos({carrera: carrera});
    return response;
  } catch (error) {
    console.error("Error al obtener status de los alumnos:", error);
    throw error;
  }
};

export default obtenerAlumnosFiltrados;