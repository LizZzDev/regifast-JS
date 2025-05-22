import Alumnos from "../../modelos/modeloAlumno.js";

const obtenerAlumnosFiltrados = async (req) => {
  const carrera = req.query.carrera || null;

  try {
    const response = await Alumnos.numeroAlumnos({carrera: carrera});
    return response;
  } catch (error) {
    console.error("Error al obtener numero de los alumnos:", error);
    throw error;
  }
};

export default obtenerAlumnosFiltrados;