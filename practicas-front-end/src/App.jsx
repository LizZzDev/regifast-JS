import React from 'react';
import RegistroEmpresa from './paginas/empresas/registroEmpresa';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/usuarios/login';
import RutasAlumnos from './rutas/RutasAlumnos';
import RutasEmpresas from './rutas/RutasEmpresas';
import RutasCoordinador from './rutas/RutasCoordinador';
import RutasJefe from './rutas/RutasJefe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/alumno/*" element={<RutasAlumnos />} />
        <Route path="/empresa/*" element={<RutasEmpresas />} />
        <Route path="/coordinador/*" element={<RutasCoordinador />} />
        <Route path="/jefe/*" element={<RutasJefe />} />
      </Routes>
    </Router>
  );
}

export default App;