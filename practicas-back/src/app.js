import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { PORT, RUTA } from './configuracion/constantes.js';
import rutas from './rutas/index.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: `${RUTA}5173`, 
  credentials: true
}));

app.use(
  session({
    secret: process.env.SECRET,      
    resave: false,                  
    saveUninitialized: false,        
    cookie: { secure: false }        
  })
);

app.use('/logos', express.static(path.join(__dirname, 'uploads/logos')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', rutas);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en ${RUTA}${PORT}`);
  });
