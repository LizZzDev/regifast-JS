import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Editar from '../paginas/empresas/editar';
import Principal from '../paginas/empresas/principal';
import Registro from '../paginas/empresas/registroEmpresa';
import Login from '../paginas/empresas/login';
import VerCalificaciones from '../paginas/empresas/calificacionSoloEmpresa';
import RutaProtegida from '../componentes/rutas/rutaProtegida';

const RutasEmpresas = () => (
    <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/editar" 
        element={
             <RutaProtegida rolEsperado="empresa">
                <Editar />
            </RutaProtegida>
        } />

        <Route path="/principal" 
        element={  
                <Principal />
            } />

        <Route path="/registro" 
        element={
            <RutaProtegida rolEsperado="empresa">
                <Registro />
            </RutaProtegida>
        } />
        <Route path="/principal/ver-calificaciones-empresa/:idEmpresa" 
        element={
            <RutaProtegida rolEsperado="empresa">
                    <VerCalificaciones />
                </RutaProtegida>
            } />
    </Routes>
);

export default RutasEmpresas;