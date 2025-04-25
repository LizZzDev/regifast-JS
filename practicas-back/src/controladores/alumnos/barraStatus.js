const barraStatus = {
    obtenerBarraStatusPorId: async (id) => {
        try {
            const barraStatus = await Alumno.obtenerAlumno(id);
            console.log ("barra", barraStatus);
            return barraStatus;
        } catch (error) {
            console.error("Error al obtener la barra de status:", error);
            throw error;
        }
    },

    aumentarBarraStatusPorId: async (id) => {
    
    }
}

export default barraStatus;