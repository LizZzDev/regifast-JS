import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calificar from '../paginas/alumnos/empresas_files/calificarEmpresa';
import VerCalificaciones from '../paginas/alumnos/empresas_files/calificacionSoloEmpresa';
import Consultar from '../paginas/alumnos/empresas_files/consultarOferta';
import Login from '../paginas/alumnos/login_files/loginAlumnos';
import Principal from '../paginas/alumnos/alumnos_files/principalAlumno';
import Registro from '../paginas/alumnos/alumnos_files/registroAlumnos';
import Documentos from '../paginas/alumnos/alumnos_files/documentos';
import CrearCuenta from '../paginas/alumnos/login_files/usuario';
import VerDatos from '../paginas/alumnos/alumnos_files/verDatos';
import RutaProtegida from '../componentes/rutas/rutaProtegida';

const RutasAlumnos = () => (
    <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/registro" 
        element={
            <RutaProtegida rolEsperado="alumno">
                <Registro />
            </RutaProtegida>
        }/>

        <Route path="/principal" 
        element={
            <RutaProtegida rolEsperado="alumno">
                <Principal />
            </RutaProtegida>
        }/>

        <Route path="/documentos"
        element={
            <RutaProtegida rolEsperado="alumno">
            <Documentos />
            </RutaProtegida>
        }/>

        <Route path="/ver-perfil"
        element={
            <RutaProtegida rolEsperado="alumno">
            <VerDatos />
            </RutaProtegida>
        }/>

        <Route path="/calificar"
        element={
            <RutaProtegida rolEsperado="alumno">
            <Calificar />
            </RutaProtegida>
        }/>

        <Route path="/consultar/ver-calificaciones-empresa/:idEmpresa"
        element={
            <RutaProtegida rolEsperado="alumno">
            <VerCalificaciones />
            </RutaProtegida>
        }/>

        <Route path="/consultar"
        element={
            <RutaProtegida rolEsperado="alumno">
            <Consultar />
            </RutaProtegida>
        }/>

    </Routes>
    );

export default RutasAlumnos;