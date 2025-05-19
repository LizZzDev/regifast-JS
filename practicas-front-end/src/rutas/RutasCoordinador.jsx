import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TablaEmpresas from '../paginas/coordinador/tablaEmpresas';
import TablaEmpresasSinVerificar from '../paginas/coordinador/tablaEmpresasSinVerificar';
import AlumnosValidar from '../paginas/coordinador/alumnos_validar'
import AsignarFecha from '../paginas/coordinador/asignar_fechas'
import CrearNuevoAdmin from '../paginas/coordinador/crearAdmin'
import CrearJefeDepto from '../paginas/coordinador/crearJefeDepto';

const RutasCoordinador = () => (
    <Routes>
        <Route path="/verificadas" element={<TablaEmpresas />} />
        <Route path="/sin-verificar" element={<TablaEmpresasSinVerificar />} />
        <Route path="/alumnos" element={<AlumnosValidar />} />
        <Route path="/fechas" element={<AsignarFecha />} />
        <Route path="/crear-coordinador" element={<CrearNuevoAdmin />} />
        <Route path="/crear-jefe" element={<CrearJefeDepto />} />
    </Routes>
);

export default RutasCoordinador;