import pool from '../configuracion/db.js';
const Alumno = {
  obtenerAlumno: async (id) => {
    try {
      const [rows] = await pool.query('SELECT * FROM alumnos WHERE IdUsuario = ?', [id]);
      return rows[0];
    } catch (error) {
      console.error("Error en buscar por código al alumno:", error);
      throw error;
    }
  },

  obtenerAlumnos: async ({ pagina, limite, carrera, busqueda, validado }) => {
    try {
      const offset = (pagina - 1) * limite;
  
      let query = `SELECT * FROM alumnos WHERE 1=1`;
      let queryCount = `SELECT COUNT(*) as total FROM alumnos WHERE 1=1`;
      const params = [];
      const countParams = [];
  
      if (carrera) {
        query += ` AND Carrera = ?`;
        queryCount += ` AND Carrera = ?`;
        params.push(carrera);
        countParams.push(carrera);
      }
  
      if (busqueda) {
        query += ` AND Codigo LIKE ?`;
        queryCount += ` AND Codigo LIKE ?`;
        params.push(`%${busqueda}%`);
        countParams.push(`%${busqueda}%`);
      }
  
      if (validado) {
        query += ` AND Revisado = ?`;
        queryCount += ` AND Revisado = ?`;
        params.push(validado);
        countParams.push(validado);
      }
  
      query += ` ORDER BY NombreCompleto ASC LIMIT ? OFFSET ?`;
      params.push(limite, offset);
  
      const [rows] = await pool.query(query, params);
      const [countRows] = await pool.query(queryCount, countParams);
      const total = countRows[0].total;
      return { 
        alumnos: rows,
        total,
        totalPaginas: Math.ceil(total / limite),
        pagina,
        limite
      };
  
    } catch (error) {
      console.error("Error en obtener alumnos:", error);
      throw error;
    }
  },

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

        return result[0];
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

  numeroAlumnos: async ({carrera}) => {
    try {
      let query = `
        SELECT 
          COUNT(*) AS total,
          SUM(CASE WHEN Revisado = 1 THEN 1 ELSE 0 END) AS revisados,
          SUM(CASE WHEN Revisado = 0 THEN 1 ELSE 0 END) AS noRevisados
        FROM alumnos;
      `;

    const values = [];
  
    if (carrera) {
      query += " AND Carrera = ?";
      values.push(carrera);
    }

    const [rows] = await pool.query(query, values);

      const { total, revisados, noRevisados } = rows[0];
      
      return {
        total,
        revisados,
        noRevisados
      };
    } catch (error) {
      console.error("Error en obtener el numero de alumnos:", error);
      throw error;
    }
  },

  barraStatusAlumnos: async ({carrera}) => {
    try {
      let query = `
      SELECT 
        COUNT(*) AS total,
        SUM(CASE WHEN BarraStatus = 0 THEN 1 ELSE 0 END) AS barraStatus1,
        SUM(CASE WHEN BarraStatus = 1 THEN 1 ELSE 0 END) AS barraStatus2,
        SUM(CASE WHEN BarraStatus = 2 THEN 1 ELSE 0 END) AS barraStatus3,
        SUM(CASE WHEN BarraStatus = 3 THEN 1 ELSE 0 END) AS barraStatus4,
        SUM(CASE WHEN BarraStatus = 4 THEN 1 ELSE 0 END) AS barraStatus5
      FROM alumnos
      WHERE 1=1
    `;
  
    const values = [];
  
    if (carrera) {
      query += " AND Carrera = ?";
      values.push(carrera);
    }
  
    const [rows] = await pool.query(query, values);
  
    const {
      barraStatus1,
      barraStatus2,
      barraStatus3,
      barraStatus4,
      barraStatus5,
    } = rows[0];
  
    return {
      barraStatus1,
      barraStatus2,
      barraStatus3,
      barraStatus4,
      barraStatus5,
    };
    } catch (error) {
      console.error("Error en obtener el numero de alumnos:", error);
      throw error;
    }
  },

  validarAlumno: async (id) => {
    try {
      const [result] = await pool.query("UPDATE alumnos SET Revision= '1' WHERE IdUsuario = ?", [id]);
      return result;
    } catch (error) {
      console.error("Error en validar alumno:", error);
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