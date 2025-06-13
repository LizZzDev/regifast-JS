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
import RutaProtegida from '../componentes/rutas/rutaProtegida';

const RutasCoordinador = () => (
    <Routes>
        <Route path="/" element={<Login />} />
    <Route path="/principal"
        element={
            <RutaProtegida rolEsperado="coordinador">
                <Principal />
            </RutaProtegida>
    }/>

    <Route path="/alumnos"
        element={
            <RutaProtegida rolEsperado="coordinador">
            <AlumnosValidar />
            </RutaProtegida>
    }/>

    <Route path="/alumnos/editar-alumno/:idAlumno"
        element={
            <RutaProtegida rolEsperado="coordinador">
            <EditarAlumno />
            </RutaProtegida>
    }/>

    <Route path="/agregar-empresa"
        element={
            <RutaProtegida rolEsperado="coordinador">
            <AgregarEmpresa />
            </RutaProtegida>
    }/>

    <Route path="/empresas"
        element={
            <RutaProtegida rolEsperado="coordinador">
            <TablaEmpresas />
            </RutaProtegida>
    }/>

    <Route path="/empresas/ver-calificaciones-empresa/:idEmpresa"
        element={
            <RutaProtegida rolEsperado="coordinador">
            <VerCalificaciones />
            </RutaProtegida>
    }/>

    <Route path="/empresas/editar-empresa/:idUsuario"
        element={
            <RutaProtegida rolEsperado="coordinador">
            <EditarEmpresa />
            </RutaProtegida>
    }/>

    <Route path="/empresas/ver-empresa/:idUsuario"
        element={
            <RutaProtegida rolEsperado="coordinador">
            <VerEmpresa />
            </RutaProtegida>
    }/>

    <Route path="/fechas"
        element={
            <RutaProtegida rolEsperado="coordinador">
            <AsignarFecha />
            </RutaProtegida>
    }/>

    <Route path="/crear-coordinador"
        element={
            <RutaProtegida rolEsperado="coordinador">
            <CrearAdmin />
            </RutaProtegida>
    }/>

    <Route path="/crear-jefe"
        element={
            <RutaProtegida rolEsperado="coordinador">
            <CrearJefeDepto />
            </RutaProtegida>
    }/>
    </Routes>
    );

export default RutasCoordinador;