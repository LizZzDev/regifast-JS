const cerrarSesion = (req) => {
    return new Promise((resolve, reject) => {
      req.session.destroy((error) => {
        if (error) {
          console.error("Error al cerrar sesión:", error);
          return reject(new Error("No se pudo cerrar la sesión."));
        }
  
        resolve({ success: true, message: "Sesión cerrada exitosamente." });
      });
    });
  };
  
  module.exports = cerrarSesion;