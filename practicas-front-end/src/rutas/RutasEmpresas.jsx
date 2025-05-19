import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Editar from '../paginas/empresas/editar';
import Principal from '../paginas/empresas/principal';
import Registro from '../paginas/empresas/registroEmpresa';
// import Login from '../paginas/empresas/login';

const RutasEmpresas = () => (
    <Routes>
        <Route path="/editar" element={<Editar />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/registro" element={<Registro />} />
        {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
);

export default RutasEmpresas;