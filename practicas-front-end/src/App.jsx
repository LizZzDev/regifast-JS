import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistroEmpresa from './paginas/empresas/registroEmpresa';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> c68a6c4737b3e7abb48c7ac9a010baca94537e0f
import Login from './paginas/usuarios/login';
import RutasAlumnos from './rutas/RutasAlumnos';
import RutasEmpresas from './rutas/RutasEmpresas';
import RutasCoordinador from './rutas/RutasCoordinador';
import RutasJefe from './rutas/RutasJefe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/registro-empresa" replace />} />
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