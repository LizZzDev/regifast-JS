import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

const generarDocumentoDesdeTemplate = (rutaTemplate, datos) => {
    try {
        console.log(datos);
        const templatePath = path.resolve(rutaTemplate);
        const content = fs.readFileSync(templatePath, 'binary');

        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip);

        doc.render(datos); // Renderiza los datos en la plantilla

        const buffer = doc.getZip().generate({ type: 'nodebuffer' });

        return buffer;
    } catch (error) {
        console.error("Error al generar el documento desde la plantilla:", error);
        throw new Error("No se pudo generar el documento. Verifica la plantilla y los datos proporcionados.");
    }
};

export default generarDocumentoDesdeTemplate;