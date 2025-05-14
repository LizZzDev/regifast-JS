import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TablaAlumnos from '../paginas/coordinador/tablaAlumnos';
import TablaEmpreass from '../paginas/coordinador/tablaEmpresas';
import TablaEmpresasSinVerificar from '../paginas/coordinador/tablaEmpresasSinVerificar';

const RutasCoordinador = () => (
    <Routes>
        <Route path="/tablaAlumnos" element={<TablaAlumnos />} />
        <Route path="/tablaEmpresas" element={<TablaEmpreass />} />
        <Route path="/tablaEmpresasSinVerificar" element={<TablaEmpresasSinVerificar />} />

    </Routes>
);

export default RutasCoordinador;