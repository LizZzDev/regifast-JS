import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calificar from '../paginas/alumnos/calificarEmpresa';
import VerCalificaciones from '../paginas/alumnos/calificacionSoloEmpresa';
import Consultar from '../paginas/alumnos/consultarOferta';
import Login from '../paginas/alumnos/loginAlumnos';
import Principal from '../paginas/alumnos/principalAlumno';
import Registro from '../paginas/alumnos/registroAlumnos';
import RegistroUsuario from '../paginas/alumnos/usuario';

const RutasAlumnos = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calificar" element={<Calificar />} />
        <Route path="/ver-calificaciones-empresa" element={<VerCalificaciones />} />
        <Route path="/consultar" element={<Consultar />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registro-usuario" element={<RegistroUsuario />} />
    </Routes>
);

export default RutasAlumnos;