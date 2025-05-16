import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrincipalJefe from '../paginas/jefeDepto/principalJefe';
import TablaAlumnos from '../paginas/jefeDepto/tablaAlumnos';

const RutasJefe = () => (
    <Routes>
        <Route path="/" element={<PrincipalJefe />} />
        <Route path="/tabla-alumnos" element={<TablaAlumnos />} />
    </Routes>
);

export default RutasJefe;