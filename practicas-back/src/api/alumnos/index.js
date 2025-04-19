const Alumnos = require("../../models/alumnos/modeloAlumno");
const inicioSesion = require("./iniciarSesion");


const iniciarSesion = async (req, res) => {
    try {
        const response = await inicioSesion(req.body); 
        res.json(response); 
      } catch (error) {
        logger.error(error);
        res.status(500).json('Error al iniciar sesion');
      }
    };

module.exports = {
    iniciarSesion,
};