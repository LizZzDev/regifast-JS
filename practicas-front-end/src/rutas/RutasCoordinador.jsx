import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TablaEmpresas from '../paginas/coordinador/tablaEmpresas';
import AlumnosValidar from '../paginas/coordinador/alumnos_validar'
import AsignarFecha from '../paginas/coordinador/asignar_fechas'
import CrearAdmin from '../paginas/coordinador/crearAdmin'
import CrearJefeDepto from '../paginas/coordinador/crearJefeDepto';
import Principal from '../paginas/coordinador/pantallaPrincipalCoordinador';
import Login from '../paginas/jefeDepartamentos/inicioSesionCJ';
import AgregarEmpresa from '../paginas/coordinador/agregarEmpresa';
import EditarAlumno from '../paginas/coordinador/editarAlumno';

const RutasCoordinador = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/empresas" element={<TablaEmpresas />} />
        <Route path="/alumnos" element={<AlumnosValidar />} />
        <Route path="/fechas" element={<AsignarFecha />} />
        <Route path="/crear-coordinador" element={<CrearAdmin />} />
        <Route path="/crear-jefe" element={<CrearJefeDepto />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/agregar-empresa" element={<AgregarEmpresa />} />
        <Route path="/editar-alumno" element={<EditarAlumno />} />
    </Routes>
);

export default RutasCoordinador;