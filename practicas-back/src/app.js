import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { PORT } from './configuracion/constantes.js';
import rutas from './rutas/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET,      
    resave: false,                  
    saveUninitialized: false,        
    cookie: { secure: false }        
  })
);

app.get("/ver-sesion", (req, res) => {
  if (req.session && req.session.usuario) {
    res.json({
      sesionActiva: true,
      datos: req.session,
    });
  } else {
    res.json({ sesionActiva: false, mensaje: "No hay sesión activa." });
  }
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', rutas);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
