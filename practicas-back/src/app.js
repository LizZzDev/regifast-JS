import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { PORT, RUTA } from './configuracion/constantes.js';
import rutas from './rutas/index.js';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware generales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sesiones
app.use(
  session({
    secret: process.env.SECRET,      
    resave: false,                  
    saveUninitialized: false,        
    cookie: { 
      secure: process.env.NODE_ENV === "production", // true solo en producción con HTTPS
      maxAge: 1000 * 60 * 60 * 2 // (ejemplo) 2 horas
    }        
  })
);

app.use('/api/logos', express.static(path.join(__dirname, 'uploads/logos')));
app.use('/api', rutas);
app.use(express.static(path.join(__dirname, "../dist")))

app.use((req, res, next) => {
  if (
    !req.originalUrl.startsWith('/api') &&
    !req.originalUrl.startsWith('/uploads') && 
    !req.originalUrl.startsWith('/logos')
  ) {
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${RUTA}${PORT}`);
});

