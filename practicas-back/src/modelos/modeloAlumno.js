import pool from '../configuracion/db.js';
const Alumno = {
  // Buscar un usuario por su id de usuario
  obtenerAlumno: async (id) => {
    try {
      const [rows] = await pool.query('SELECT * FROM alumnos WHERE IdUsuario = ?', [id]);
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

modificarDatosAlumno: async (data, idUsuario) => {
  const fields = Object.keys(data); 
  const values = Object.values(data); 

  const setClause = fields.map(field => `${field} = ?`).join(', ');

  try {
    const [result] = await pool.query(
      `UPDATE alumnos SET ${setClause} WHERE IdUsuario = ?`,
      [...values, idUsuario]
    );

    return result;
  } catch (error) {
    console.error("Error al modificar datos del alumno:", error);
    throw error;
  }
},

  aumentarEnUnoBarraStatus: async (id) => {
    try {
      const [result] = await pool.query('UPDATE alumnos SET BarraStatus = BarraStatus + 1 WHERE IdUsuario = ?', [id]);
      return result;
    } catch (error) {
      console.error("Error en aumentar barra status:", error);
      throw error;
    }
  },

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