import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrincipalJefe from '../paginas/jefeDepartamentos/principalJefe';
import TablaAlumnos from '../paginas/jefeDepartamentos/tablaAlumnos';
import Login from '../paginas/jefeDepartamentos/inicioSesionCJ';
import RutaProtegida from '../componentes/rutas/rutaProtegida';

const RutasJefe = () => (
    <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/principal" 
        element={
         <RutaProtegida rolEsperado="jefeDepartamento">
                <PrincipalJefe />
            </RutaProtegida>
        }/>

        <Route path="/alumnos" 
        element={
         <RutaProtegida rolEsperado="jefeDepartamento">
                <TablaAlumnos />
            </RutaProtegida>
        }/>
    </Routes>
);

export default RutasJefe;