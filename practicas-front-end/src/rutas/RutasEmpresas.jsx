import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Editar from '../paginas/empresas/editar';
import Principal from '../paginas/empresas/principal';
import Registro from '../paginas/empresas/registroEmpresa';
import Login from '../paginas/empresas/login';
import VerCalificaciones from '../paginas/empresas/calificacionSoloEmpresa';

const RutasEmpresas = () => (
    <Routes>
        <Route path="/editar" element={<Editar />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<Login />} />
        <Route path="/principal/ver-calificaciones-empresa/:idEmpresa" element={<VerCalificaciones />} />
    </Routes>
);

export default RutasEmpresas;