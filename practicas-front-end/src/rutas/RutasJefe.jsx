import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrincipalJefe from '../paginas/jefeDepartamentos/principalJefe';
import TablaAlumnos from '../paginas/jefeDepartamentos/tablaAlumnos';
import Login from '../paginas/jefeDepartamentos/inicioSesionCJ';

const RutasJefe = () => (
    <Routes>
        <Route path="/prinipal" element={<PrincipalJefe />} />
        <Route path="/principal" element={<TablaAlumnos />} />
        <Route path="/" element={<Login />} />
    </Routes>
);

export default RutasJefe;