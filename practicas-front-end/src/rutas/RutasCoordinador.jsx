import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TablaEmpresas from '../paginas/coordinador/tablaEmpresas';
import AlumnosValidar from '../paginas/coordinador/alumnos_validar'
import AsignarFecha from '../paginas/coordinador/asignar_fechas'
import CrearNuevoAdmin from '../paginas/coordinador/crearAdmin'
import CrearJefeDepto from '../paginas/coordinador/crearJefeDepto';
import Principal from '../paginas/coordinador/pantallaPrincipalCoordinador';
import ModificarAlumno from '../paginas/coordinador/modificarAlumno';
import Login from '../paginas/jefeDepartamentos/inicioSesionCJ';

const RutasCoordinador = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/empresas" element={<TablaEmpresas />} />
        <Route path="/alumnos" element={<AlumnosValidar />} />
        <Route path="/fechas" element={<AsignarFecha />} />
        <Route path="/crear-coordinador" element={<CrearAdmin />} />
        <Route path="/modificar-alumno" element={<ModificarAlumno />} />
        <Route path="/crear-jefe" element={<CrearJefeDepto />} />
        <Route path="/principal" element={<Principal />} />

    </Routes>
);

export default RutasCoordinador;