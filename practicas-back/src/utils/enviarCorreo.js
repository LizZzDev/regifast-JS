import nodemailer from 'nodemailer';


/**
 * Envía un correo electrónico.
 * @param {string} correo - Dirección del destinatario. (aqui antes decia email)
 * @param {string} subject - Asunto del correo.
 * @param {string} text - Contenido del correo.
 * @param {string} token - Token de autenticación.
 * 
 */
const enviarCorreo = async (data) => {
    const { email, subject, text } = data;


    try {
        const transporter = nodemailer.createTransport({
            host: '148.202.3.50',
            port: 25,
            secure: false, // true for 465, false for other ports
            tls: {
            rejectunauthorized: false // Permite conexiones inseguras
            }
        });

        const mailOptions = {
            from: 'hector.orozco@sems.udg.mx',
            to: email,
            subject: subject,
            text: text,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado: '+ info.response);
    } catch (error) {
        console.error('Error al enviar el correo:', error.message);

    }
};

export default enviarCorreo;