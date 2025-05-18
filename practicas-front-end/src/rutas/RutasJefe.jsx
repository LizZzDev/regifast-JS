import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrincipalJefe from '../paginas/jefeDepartamentos/principalJefe';
import TablaAlumnos from '../paginas/jefeDepartamentos/tablaAlumnos';

const RutasJefe = () => (
    <Routes>
        <Route path="/" element={<PrincipalJefe />} />
        <Route path="/tabla-alumnos" element={<TablaAlumnos />} />
    </Routes>
);

export default RutasJefe;