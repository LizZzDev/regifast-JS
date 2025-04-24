import pool from '../configuracion/db.js';
//¿modificar y cambiar a orms?
const Alumno = {
  // Buscar un usuario por código
  obtenerAlumno: async (id) => {
    try {
      const [rows] = await pool.query('SELECT * FROM alumnos WHERE IdAlumno = ?', [id]);
      return rows[0];
    } catch (error) {
      console.error("Error en buscar por código al alumno:", error);
      throw error;
    }
  },

  // Buscar todos los alumnos
  obtenerAlumnos: async () => {
    try {
      const [rows] = await pool.query('SELECT * FROM alumnos');
      return rows;
    } catch (error) {
      console.error("Error en obtener todos los alumnos:", error);
      throw error;
    }
  },

  // Crear un nuevo alumno
    agregarNuevoAlumno: async (data) => {
      console.log ("data", data);
      const {
        IdUsuario, Codigo, NombreCompleto, Carrera, Grado, Grupo, Turno,
        Domicilio, NumeroCasa, Colonia, CodigoPostal, Municipio, Estado,
        Telefono, TelefonoEmergencia, CorreoInstitucional, NSS, Edad,
        Nacionalidad, NombrePadre, TelefonoPadre, NombreMadre, TelefonoMadre,
        Movil
      } = data;

      try {
        const [result] = await pool.query(
          `INSERT INTO alumnos (
            IdUsuario, Codigo, NombreCompleto, Carrera, Grado, Grupo, Turno,
            Domicilio, NumeroCasa, Colonia, CodigoPostal, Municipio, Estado,
            Telefono, TelefonoEmergencia, CorreoInstitucional, NSS, Edad,
            Nacionalidad, NombrePadre, TelefonoPadre, NombreMadre, TelefonoMadre,
            Movil, BarraStatus
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            IdUsuario, Codigo, NombreCompleto, Carrera, Grado, Grupo, Turno,
            Domicilio, NumeroCasa, Colonia, CodigoPostal, Municipio, Estado,
            Telefono, TelefonoEmergencia, CorreoInstitucional, NSS, Edad,
            Nacionalidad, NombrePadre, TelefonoPadre, NombreMadre, TelefonoMadre,
            Movil, 1
          ]
        );

        return result;
      } catch (error) {
        console.error("Error en agregar nuevo usuario:", error);
        throw error;
      }
  },

  aumentarEnUnoBarraStatus: async (id) => {
    try {
      const [result] = await pool.query('UPDATE alumnos SET BarraStatus = BarraStatus + 1 WHERE IdAlumno = ?', [id]);
      return result;
    } catch (error) {
      console.error("Error en aumentar barra status:", error);
      throw error;
    }
  },

  // Eliminar un usuario por ID
  eliminarPorId: async (id) => {
    try {
      const [result] = await pool.query('DELETE FROM alumnos WHERE IdUsuario = ?', [id]);
      return result;
    } catch (error) {
      console.error("Error en eliminar por id:", error);
      throw error;
    }
  },
};

export default Alumno;