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

const RutasAlumnos = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calificar" element={<Calificar />} />
        <Route path="/consultar/ver-calificaciones-empresa/:idEmpresa" element={<VerCalificaciones />} />
        <Route path="/consultar" element={<Consultar />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/ver-perfil" element={<VerDatos />} />
    </Routes>
);

export default RutasAlumnos;