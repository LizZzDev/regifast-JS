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
import EditarEmpresa from '../paginas/coordinador/editarEmpresa';
import RecuperarContrasena from '../paginas/coordinador/recuperarContrasena'
import VerCalificaciones from '../paginas/coordinador/calificacionSoloEmpresa';


const RutasCoordinador = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/empresas" element={<TablaEmpresas />} />
        <Route path="/empresas/ver-calificaciones-empresa/:idEmpresa" element={<VerCalificaciones />} />
        <Route path="/alumnos" element={<AlumnosValidar />} />
        <Route path="/fechas" element={<AsignarFecha />} />
        <Route path="/crear-coordinador" element={<CrearAdmin />} />
        <Route path="/crear-jefe" element={<CrearJefeDepto />} />
        <Route path="/agregar-empresa" element={<AgregarEmpresa />} />
        <Route path="/alumnos/editar-alumno/:idAlumno" element={<EditarAlumno />} />
        <Route path="/empresas/editar-empresa/:idUsuario" element={<EditarEmpresa />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
    </Routes>
);

export default RutasCoordinador;