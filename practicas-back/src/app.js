import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { PORT } from './configuracion/constantes.js';
import rutas from './rutas/index.js';
import dotenv from 'dotenv';
<<<<<<< HEAD
// cambio de richi
import usuariosRutas from './rutas/usuarios.js';
//----------------------------------------------------
dotenv.config();

//quiero ver si me deja hacer esto **richi**
const app = express();
//----------------------------------------------------

=======
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.json());

app.use('/logos', express.static(path.join(__dirname, 'uploads/logos')));
>>>>>>> b76310e4e3d94f1f5e9b93c37e4db65d0c685de8

app.use(
  session({
    secret: process.env.SECRET,      
    resave: false,                  
    saveUninitialized: false,        
    cookie: { secure: false }        
  })
);

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

<<<<<<< HEAD
// aqui esta lo del puerto **richi**
app.use('/usuarios', usuariosRutas);
// ----------------------------------------------------

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
// ----------------------------------------------------
app.use('/', rutas);
=======
app.use('/', rutas);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
>>>>>>> b76310e4e3d94f1f5e9b93c37e4db65d0c685de8
