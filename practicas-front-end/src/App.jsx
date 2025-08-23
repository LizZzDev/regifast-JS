import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RutasAlumnos from './rutas/RutasAlumnos';
import RutasEmpresas from './rutas/RutasEmpresas';
import RutasCoordinador from './rutas/RutasCoordinador';
import RutasJefe from './rutas/RutasJefe';
import Login from './paginas/usuarios/login';
import NuevaContrasena from './paginas/usuarios/nuevaContra';
import RecuperarContrasena from './paginas/usuarios/recuperarContra';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/nueva-contra/:token" element={<NuevaContrasena />} />
        <Route path="/recuperar-contra" element={<RecuperarContrasena />} />
        <Route path="/alumno_poli/*" element={<RutasAlumnos />} />
        <Route path="/empresa_poli/*" element={<RutasEmpresas />} />
        <Route path="/coordinador_poli/*" element={<RutasCoordinador />} />
        <Route path="/jefe_poli/*" element={<RutasJefe />} />
      </Routes>
    </Router>
  );
}

export default App;