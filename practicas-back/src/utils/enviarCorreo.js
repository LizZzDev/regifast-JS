import nodemailer from 'nodemailer';

/**
 * Envía un correo electrónico.
 * @param {string} email - Dirección del destinatario.
 * @param {string} subject - Asunto del correo.
 * @param {string} text - Contenido del correo.
 */
const enviarCorreo = async (data) => {
    const { email, subject, text } = data.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rodriguezjaramilloricardo103@gmail.com',
                pass: 'klxz xngd yuqo eilq', // Usa siempre token de aplicación
            },
        });

        const mailOptions = {
            from: 'rodriguezjaramilloricardo103@gmail.com',
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