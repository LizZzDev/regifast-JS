import pool from '../configuracion/db.js';

const Empresa = {
    crearEmpresa: async (connection, datos) => {
      const { 
        Nombre, RFC, Telefono, Calle, Colonia, Numero, Estado,
        CodigoPostal, Municipio, Descripcion, Logo, Actividades, Vacantes, Validada 
       } = datos;
      try {
        const [result] = await connection.query(
          `INSERT INTO empresas (
            Nombre, RFC, Telefono, Calle, Colonia, Numero,
            Estado, CodigoPostal, Municipio, Descripcion, Logo,
            Actividades, Vacantes, Validada
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [Nombre, RFC, Telefono, Calle, Colonia, Numero, Estado,
          CodigoPostal, Municipio, Descripcion, Logo, Actividades, Vacantes, Validada]
        );
        return result;
      } catch (error) {
        console.error("Error en agregar nueva empresa:", error);
        throw error;
      }
    },

    obtenerEmpresas: async (soloConVacantes = false) => {
      try {
        let query = ` SELECT * FROM empresas`;
        if (soloConVacantes) {
          query += ' WHERE Vacantes > 0';
        }
        const [rows] = await pool.query(query);
        return rows;
      } catch (error) {
        console.error("Error al obtener la empresa:", error);
        throw error;
      }
    },

    obtenerEmpresaPorId: async (id) => {
      try {
        const [rows] = await pool.query(
          `SELECT * FROM empresas WHERE IdEmpresa = ?`,
          [id]
        );
        return rows;
      } catch (error) {
        console.error("Error al obtener la empresa:", error);
        throw error;
      }
    },

    obtenerVacantesPorId: async (id) => {
      try {
        const [rows] = await pool.query(
          `SELECT Vacantes FROM empresas WHERE IdEmpresa = ?`,
          [id]
        );
        return rows[0]?.Vacantes ?? 0; // Si no hay, devuelve 0
      } catch (error) {
        console.error("Error al obtener vacantes:", error);
        throw error;
      }
    },
    
    disminuirVacante: async (IdEmpresa) => {
      try {
        const [result] = await pool.query(
          `UPDATE empresas SET Vacantes = Vacantes - 1 WHERE IdEmpresa = ? AND Vacantes > 0`,
          [IdEmpresa]
        );
        return result;
      } catch (error) {
        console.error("Error al disminuir vacantes:", error);
        throw error;
      }
    },
  };
  
  export default Empresa;