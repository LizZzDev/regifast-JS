import express from 'express';
import cors from 'cors';
import { PORT } from './configuracion/constantes.js';
import rutas from './rutas/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', rutas);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
