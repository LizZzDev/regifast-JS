const Empresa = {
    crearEmpresa: async (connection, datosEmpresa, idUsuario) => {
      console.log("Método crearEmpresa llamado con:", { connection, datosEmpresa, idUsuario });
      // Aquí puedes implementar la lógica más adelante
    },

    obtenerEmpresa: async (soloConVacantes = false) => {
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