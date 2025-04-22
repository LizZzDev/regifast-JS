const Alumno = require("../../modelos/modeloAlumno");

const añadirDatosDelAlumno = async (req, res) => {
    try {
        const correo = req.session?.correo;
        const idUsuario = req.session?.id;

        const datos = {
        ...req.body,
        CorreoInstitucional: correo,
        Id: idUsuario
        };

        const resultado = Alumno.agregarNuevoAlumno(datos);

        res.status(201).json({ mensaje: "Alumno agregado correctamente", resultado });
    } catch (error) {
        console.error("Error al añadir datos del alumno:", error.message);
        throw new Error("No se pudo procesar el formulario.");
    }
}

module.exports = añadirDatosDelAlumno;