const express = require('express');
const crypto = require('crypto');
const app = express.Router();
import token from '../modelos/modelotoken.js';


router.post('/api/generar-token', async (req, res) => {
    try {
        const { correo } = req.body;

        if (!correo) {
            return res.status(400).json({ error: 'Correo es requerido' });
        }

        const token = crypto.randomBytes(32).toString('hex');
        const fechaCreacion = new Date();
        const fechaExpiracion = new Date(fechaCreacion.getTime() + 5 * 60 * 1000); // 5 min

        await token.guardarToken(token, correo, fechaCreacion, fechaExpiracion);

        res.json({
            token,
            fechaCreacion,
            fechaExpiracion
        });
    } catch (error) {
        console.error("Error al generar y guardar el token:", error);
        res.status(500).json({ error: 'No se pudo generar el token' });
    }
});
export default router;

// app.use(express.json());
// app.post('/api/generar-token', (req, res) => {
//     const token = crypto.randomBytes(32).toString('hex'); // Genera un token aleatorio
//     const fechaCreacion = new Date(); // Fecha de creación
//     const fechaExpiracion = new Date(fechaCreacion.getTime() + 5 * 60 * 1000); // Fecha de expiración (5 minutos después)

//     res.json({
//         token,
//         fechaCreacion,
//         fechaExpiracion
//     });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en el puerto ${PORT}`);
// })
