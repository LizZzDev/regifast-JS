import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrincipalJefe from '../paginas/jefeDepartamentos/principalJefe';
import TablaAlumnos from '../paginas/jefeDepartamentos/tablaAlumnos';
import Login from '../paginas/jefeDepartamentos/inicioSesionCJ';

const RutasJefe = () => (
    <Routes>
        <Route path="/" element={<PrincipalJefe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tabla-alumnos" element={<TablaAlumnos />} />
    </Routes>
);

export default RutasJefe;