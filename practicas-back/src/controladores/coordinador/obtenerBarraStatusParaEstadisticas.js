import Alumnos from "../../modelos/modeloAlumno.js";
import jefeDeDepartamento from "../../modelos/modeloJefeDepartamento.js";

const obtenerAlumnosFiltrados = async (req) => {
  let carrera = req.query.carrera || null;

  try {
    if (req.session.rol === "jefeDepartamento") {
      const jefe = await jefeDeDepartamento.obtenerJefe(req.session.ID);
      carrera = jefe?.Carrera;
    }

    const response = await Alumnos.barraStatusAlumnos({ carrera });
    return response;

  } catch (error) {
    console.error("Error al obtener status de los alumnos:", error);
    throw error;
  }
};

export default obtenerAlumnosFiltrados;