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
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [Nombre, RFC, Telefono, Calle, Colonia, Numero, Estado,
          CodigoPostal, Municipio, Descripcion, Logo, Actividades, Vacantes, Validada]
        );
        return result;
      } catch (error) {
        console.error("Error en agregar nueva empresa:", error);
        throw error;
      }
    },

    obtenerEmpresasFiltradas: async ({ pagina, limite, validada, soloConVacantes }) => {
      try {
        const offset = (pagina - 1) * limite;
    
        let query = `SELECT * FROM empresas WHERE 1=1`;
        let queryCount = `SELECT COUNT(*) as total FROM empresas WHERE 1=1`;
        const params = [];
        const countParams = [];
    
        if (validada !== null) {
          query += ` AND Validada = ?`;
          queryCount += ` AND Validada = ?`;
          params.push(validada);
          countParams.push(validada);
        }
    
        if (soloConVacantes) {
          query += ` AND Vacantes > 0`;
          queryCount += ` AND Vacantes > 0`;
        }
    
        query += ` ORDER BY Nombre ASC LIMIT ? OFFSET ?`;
        params.push(limite, offset);
    
        const [rows] = await pool.query(query, params);
        const [countRows] = await pool.query(queryCount, countParams);
        const total = countRows[0].total;
    
        return { 
          empresas: rows, 
          total,
          totalPaginas: Math.ceil(total / limite),
          pagina: pagina,
          limite: limite,
          
        };
      } catch (error) {
        console.error("Error al obtener empresas filtradas:", error);
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