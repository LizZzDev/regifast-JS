import express from 'express';
import { PORT } from './configuracion/constantes.js';

const app = express();

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
