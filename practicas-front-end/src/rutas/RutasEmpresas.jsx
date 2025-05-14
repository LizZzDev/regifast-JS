import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Editar from '../paginas/empresas/editar';
import Principal from '../paginas/empresas/principal';
import Registro from '../paginas/empresas/registroEmpresa';

const RutasEmpresas = () => (
    <Routes>
        <Route path="/editar" element={<Editar />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/registro" element={<Registro />} />
    </Routes>
);

export default RutasEmpresas;