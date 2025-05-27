import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TablaEmpresas from '../paginas/coordinador/empresas_nav/tablaEmpresas';
import AlumnosValidar from '../paginas/coordinador/alumnos_nav/alumnos_validar'
import AsignarFecha from '../paginas/coordinador/coordinador_files/asignar_fechas'
import CrearAdmin from '../paginas/coordinador/opciones_añadir_jefes_nav/crearAdmin'
import CrearJefeDepto from '../paginas/coordinador/opciones_añadir_jefes_nav/crearJefeDepto';
import Principal from '../paginas/coordinador/coordinador_files/pantallaPrincipalCoordinador';
import Login from '../paginas/jefeDepartamentos/inicioSesionCJ';
import AgregarEmpresa from '../paginas/coordinador/empresas_nav/agregarEmpresa';
import EditarAlumno from '../paginas/coordinador/alumnos_nav/editarAlumno';
import EditarEmpresa from '../paginas/coordinador/empresas_nav/editarEmpresa';
import VerCalificaciones from '../paginas/coordinador/empresas_nav/calificacionSoloEmpresa';
import VerEmpresa from '../paginas/coordinador/empresas_nav/ver_empresas';

const RutasCoordinador = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal />} />

        <Route path="/alumnos" element={<AlumnosValidar />} />
        <Route path="/alumnos/editar-alumno/:idAlumno" element={<EditarAlumno />} />

        <Route path="/agregar-empresa" element={<AgregarEmpresa />} />
        <Route path="/empresas" element={<TablaEmpresas />} />
        <Route path="/empresas/ver-calificaciones-empresa/:idEmpresa" element={<VerCalificaciones />} />
        <Route path="/empresas/editar-empresa/:idUsuario" element={<EditarEmpresa />} />
        <Route path="/empresas/ver-empresa/:idUsuario" element={<VerEmpresa />} /> 

        <Route path="/fechas" element={<AsignarFecha />} />
        
        <Route path="/crear-coordinador" element={<CrearAdmin />} />
        <Route path="/crear-jefe" element={<CrearJefeDepto />} />
    </Routes>
);

export default RutasCoordinador;