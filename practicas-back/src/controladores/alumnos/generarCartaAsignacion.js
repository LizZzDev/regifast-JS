import path from 'path';
import generarDocumentoDesdeTemplate from '../../utils/generarDocumentosTemplate.js';
import Alumnos from '../../modelos/modeloAlumno.js';
import Empresa from '../../modelos/modeloEmpresa.js';

const descargarCartaAsignacion = async (req, res) => {
    try {
        const idUsuario = req.session.ID;

        const alumno = await Alumnos.obtenerAlumno(idUsuario);
        const empresa = await Empresa.obtenerEmpresaPorId(alumno.IdEmpresa);
        
        const datos = {
            empresa:  empresa[0].Nombre,
            nombre: alumno.NombreCompleto,
            codigo: alumno.Codigo,
            carrera: alumno.Carrera,
            grado: alumno.Grado,
            grupo: alumno.Grupo,
            turno: alumno.Turno,
            domicilio: alumno.Domicilio,
            numero: alumno.NumeroCasa,
            colonia: alumno.Colonia,
            cp: alumno.CodigoPostal,
            municipio: alumno.Municipio,
            telefono: alumno.Telefono,
            movil: alumno.Movil,
            email: alumno.CorreoInstitucional,
            emergencia: alumno.TelefonoEmergencia,
            nss: alumno.NSS,
            edad: alumno.Edad,
            nacionalidad: alumno.Nacionalidad,
            nombrepadre: alumno.NombrePadre,
            telefonopadre: alumno.TelefonoPadre,
            nombremadre: alumno.NombreMadre,
            telefonomadre: alumno.TelefonoMadre
        };

        const rutaTemplate = path.join('src', 'templates', 'carta_asignacion_template.docx');
        const documentoBuffer = await generarDocumentoDesdeTemplate(rutaTemplate, datos);

        return documentoBuffer;
    } catch (error) {
        console.error("Error en el servicio de generar carta de asignación:", error);
        throw error;
    }
};

export default descargarCartaAsignacion;