import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calificar from '../paginas/alumnos/calificarEmpresa';
import VerCalificaciones from '../paginas/alumnos/calificacionSoloEmpresa';
import Consultar from '../paginas/alumnos/consultarOferta';
import Login from '../paginas/alumnos/loginAlumnos';
import Principal from '../paginas/alumnos/principalAlumno';
import Registro from '../paginas/alumnos/registroAlumnos';
import Documentos from '../paginas/alumnos/documentos';
import RegistroUsuario from '../paginas/alumnos/usuario';
import PerfilAlumno from '../paginas/alumnos/verDatos';
import CrearCuenta from '../paginas/alumnos/usuario';

const RutasAlumnos = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calificar" element={<Calificar />} />
        <Route path="/consultar/ver-calificaciones-empresa/:idEmpresa" element={<VerCalificaciones />} />
        <Route path="/consultar" element={<Consultar />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/registro-usuarios" element={<RegistroUsuario />} />
        <Route path="/ver-datos" element={<PerfilAlumno />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
    </Routes>
);

export default RutasAlumnos;