import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calificar from '../paginas/alumnos/calificarEmpresa';
import VerCalificaciones from '../paginas/alumnos/calificacionSoloEmpresa';
import Consultar from '../paginas/alumnos/consultarOferta';
import Login from '../paginas/alumnos/loginAlumnos';
import Principal from '../paginas/alumnos/principalAlumno';
import Registro from '../paginas/alumnos/registroAlumnos';

const RutasAlumnos = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calificar" element={<Calificar />} />
        <Route path="/consultar/ver-calificaciones-empresa/:idEmpresa" element={<VerCalificaciones />} />
        <Route path="/consultar" element={<Consultar />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/registro" element={<Registro />} />
    </Routes>
);

export default RutasAlumnos;