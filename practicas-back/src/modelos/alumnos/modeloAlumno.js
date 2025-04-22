const pool = require('../../configuracion/db');

const Alumno = {
  // Buscar un usuario por codigo
  buscarPorCodigo: async (codigo) => {
    try {
      const [rows] = await pool.query('SELECT * FROM alumnos WHERE Codigo = ?', [codigo]);
      return rows[0]; 
    } catch (error) {
      console.error("Error en buscar por codigo al alumno:", error);
      throw error;
    }
  },

   // Buscar todos los alumnos
  obtenerAlumnos: async () => {
    try {
      const result = await pool.query('SELECT * FROM alumnos');
      return result; 
    } catch (error) {
      console.error("Error en obtener todos los alumnos:", error);
      throw error;
    }
  },

  // Crear un nuevo alumno
  agregarNuevoAlumno: async (data) => {
    const {
            Codigo, NombreCompleto, Carrera, Grado, Grupo, Turno,
            Domicilio, NumeroCasa, Colonia, CodigoPostal, Municipio, Estado,
            Telefono, TelefonoEmergencia, CorreoInstitucional, NSS, Edad,
            Nacionalidad, NombrePadre, TelefonoPadre, NombreMadre, TelefonoMadre,
            Movil
        } = data;  

    try {
        const [result] = await pool.query(
            `INSERT INTO usuarios (
              Codigo, NombreCompleto, Carrera, Grado, Grupo, Turno,
              Domicilio, NumeroCasa, Colonia, CodigoPostal, Municipio, Estado,
              Telefono, TelefonoEmergencia, CorreoInstitucional, NSS, Edad,
              Nacionalidad, NombrePadre, TelefonoPadre, NombreMadre, TelefonoMadre,
              Movil, Revisado
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              Codigo, NombreCompleto, Carrera, Grado, Grupo, Turno,
              Domicilio, NumeroCasa, Colonia, CodigoPostal, Municipio, Estado,
              Telefono, TelefonoEmergencia, CorreoInstitucional, NSS, Edad,
              Nacionalidad, NombrePadre, TelefonoPadre, NombreMadre, TelefonoMadre,
              Movil, 0
            ]
          );
      
          return result;
    } catch (error) {
      console.error("Error en agregar nuevo usuario:", error);
      throw error;
    }
  },

  // Eliminar un usuario por ID
  eliminarPorId: async (id) => {
    try {
      const [result] = await pool.query('DELETE FROM usuarios WHERE IdUsuario = ?', [id]);
      return result; 
    } catch (error) {
      console.error("Error en eliminar por id:", error);
      throw error;
    }
  },
};

module.exports = Alumno;