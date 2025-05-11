import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { PORT } from './configuracion/constantes.js';
import rutas from './rutas/index.js';
import generartokenRouter from './controladores/usuarios/generarToken.js';
import dotenv from 'dotenv';
dotenv.config();

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
// --------------------------------------------------------------------------------------------------------
app.use('/api/generar-token', generartokenRouter);
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});
// --------------------------------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
const app = express();
app.use(express.json());

app.use(generartokenRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
// --------------------------------------------------------------------------------------------------------