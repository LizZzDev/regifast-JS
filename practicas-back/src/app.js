import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { PORT } from './configuracion/constantes.js';
import rutas from './rutas/index.js';
import dotenv from 'dotenv';
// cambio de richi
import usuariosRutas from './rutas/usuarios.js';
//----------------------------------------------------
dotenv.config();

//quiero ver si me deja hacer esto **richi**
const app = express();
//----------------------------------------------------


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

// aqui esta lo del puerto **richi**
app.use('/usuarios', usuariosRutas);
// ----------------------------------------------------

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
// ----------------------------------------------------
app.use('/', rutas);