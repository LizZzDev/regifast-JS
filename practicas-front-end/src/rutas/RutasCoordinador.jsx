import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TablaEmpreass from '../paginas/coordinador/tablaEmpresas';
import TablaEmpresasSinVerificar from '../paginas/coordinador/tablaEmpresasSinVerificar';

const RutasCoordinador = () => (
    <Routes>
        <Route path="/verificadas" element={<TablaEmpreass />} />
        <Route path="/sin-verificar" element={<TablaEmpresasSinVerificar />} />

    </Routes>
);

export default RutasCoordinador;