import pool from '../configuracion/db.js';

const jefeDeDepartamento = {
    crearJefeDeDepartamento: async (connection, datos, idUsuario) => {
      const { Carrera} = datos;
      try {
        const [result] = await connection.query(
          `INSERT INTO jefeDeDepartamento (IdUsuario, Carrera) VALUES (?, ?)`,
          [idUsuario, Carrera]
        );
        return result;
      } catch (error) {
        console.error("Error en agregar al jefe de departamento:", error);
        throw error;
      }
    }
};

export default jefeDeDepartamento;