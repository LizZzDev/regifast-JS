import pool from '../configuracion/db.js';

const Empresa = {
    agregarNuevaEmpresa: async (connection, datos, idUsuario, correo) => {
      const { 
        Nombre, RFC, Telefono, Calle, Colonia, Numero, Estado, CodigoPostal, Municipio, 
        Descripcion, imagen, Actividades, Vacantes, Responsable, Cargo, CarreraPreferida, Validada, PracticasExtraordinarias
       } = datos;

      const DomicilioFiscal = `${Calle} ${Numero}, ${Colonia}, ${CodigoPostal}, ${Municipio}, ${Estado}`;
      
      try {
        const [result] = await connection.query(
          `INSERT INTO empresas (
            IdUsuario, Nombre, RFC, Telefono, Correo, DomicilioFiscal, Descripcion, Logo,
            Actividades, Vacantes, Responsable, Cargo, CarreraPreferida, Validada, PracticasExtraordinarias
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [idUsuario, Nombre, RFC, Telefono, correo, DomicilioFiscal, Descripcion, imagen, Actividades, Vacantes, Responsable, Cargo, CarreraPreferida, Validada, PracticasExtraordinarias]
        );
        return result;
      } catch (error) {
        console.error("Error en agregar nueva empresa:", error);
        throw error;
      }
    },

      añadirEmpresa: async (datos, idUsuario) => {
      const { 
        Nombre, RFC, Telefono, Correo, Calle, Colonia, Numero, Estado,
        CodigoPostal, Municipio, Descripcion, imagen, Actividades, Vacantes, Responsable, Cargo, Validada, PracticasExtraordinarias
       } = datos;

      const DomicilioFiscal = `${Calle} ${Numero}, ${Colonia}, ${CodigoPostal}, ${Municipio}, ${Estado}`;
      
      try {
        const [result] = await pool.query(
          `INSERT INTO empresas (
            IdUsuario, Nombre, RFC, Telefono, Correo, DomicilioFiscal, Descripcion, Logo,
            Actividades, Vacantes, Responsable, Cargo, Validada, PracticasExtraordinarias
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [idUsuario, Nombre, RFC, Telefono, Correo, DomicilioFiscal, Descripcion, imagen, Actividades, Vacantes, Responsable, Cargo, Validada, PracticasExtraordinarias]
        );
        return result;
      } catch (error) {
        console.error("Error en agregar nueva empresa:", error);
        throw error;
      }
    },

    obtenerEmpresasFiltradas: async ({ pagina, limite, validada, soloConVacantes, practicasExtraordinarias }) => {
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

        if (practicasExtraordinarias) {
          query += ` AND PracticasExtraordinarias > 0`;
          queryCount += ` AND PracticasExtraordinarias > 0`;
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

    obtenerEmpresaPorIdUsuario: async (id) => {
      try {
        console.log (id)
        const [rows] = await pool.query(
          `SELECT * FROM empresas WHERE IdUsuario = ?`,
          [id]
        );

        console.log ("x", rows[0])
        return rows[0]; 
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
        return rows[0];
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

    modificarDatosEmpresa: async (data, idUsuario) => {
      const fields = Object.keys(data); 
      const values = Object.values(data); 
  
      const setClause = fields.map(field => `${field} = ?`).join(', ');
  
      try {
        const [result] = await pool.query(
          `UPDATE empresas SET ${setClause} WHERE IdUsuario = ?`,
          [...values, idUsuario]
        );
  
        return result;
      } catch (error) {
        console.error("Error al modificar datos de la empresa:", error);
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

    validarEmpresa: async (id) => {
      try {
        const [result] = await pool.query("UPDATE empresas SET Validada= '1' WHERE IdUsuario = ?", [id]);
        return result;
      } catch (error) {
        console.error("Error en validar empresa:", error);
        throw error;
      }
    },
  
  };
  
  export default Empresa;