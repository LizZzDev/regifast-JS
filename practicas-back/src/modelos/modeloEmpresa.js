import pool from '../configuracion/db.js';

const Empresa = {
    crearEmpresa: async (connection, datos, IdUsuario) => {
      const { 
        Nombre, RFC, Telefono, Calle, Colonia, Numero, Estado,
        CodigoPostal, Municipio, Descripcion, Logo, Actividades, Vacantes, Validada 
       } = datos;
      try {
        const [result] = await connection.query(
          `INSERT INTO empresas (
            IdEmpresa, Nombre, RFC, Telefono, Calle, Colonia, Numero,
            Estado, CodigoPostal, Municipio, Descripcion, Logo,
            Actividades, Vacantes, Validada
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [IdUsuario, Nombre, RFC, Telefono, Calle, Colonia, Numero, Estado,
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
    }
  };
  
  export default Empresa;