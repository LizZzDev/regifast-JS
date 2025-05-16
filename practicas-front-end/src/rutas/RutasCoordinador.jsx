import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TablaEmpreass from '../paginas/coordinador/tablaEmpresas';
import TablaEmpresasSinVerificar from '../paginas/coordinador/tablaEmpresasSinVerificar';
import AlumnosValidar from '../paginas/coordinador/alumnos_validar'
import AsignarFecha from '../paginas/coordinador/asignar_fechas'
import CrearAdmin from '../paginas/coordinador/crearAdmin'
import CrearJefeDepto from '../paginas/jefeDepto/crearJefeDepto';

const RutasCoordinador = () => (
    <Routes>
        <Route path="/verificadas" element={<TablaEmpreass />} />
        <Route path="/sin-verificar" element={<TablaEmpresasSinVerificar />} />
        <Route path="/alumnos" element={<AlumnosValidar />} />
        <Route path="/fechas" element={<AsignarFecha />} />
        <Route path="/crear-coordinador" element={<CrearAdmin />} />
        <Route path="/crear-jefe" element={<CrearJefeDepto />} />
    </Routes>
);

export default RutasCoordinador;