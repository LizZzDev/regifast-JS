import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calificar from '../paginas/alumnos/calificarEmpresa';
import VerCalificaciones from '../paginas/alumnos/calificacionSoloEmpresa';
import Consultar from '../paginas/alumnos/consultarOferta';


const RutasAlumnos = () => (
    <Routes>
        <Route path="/calificar" element={<Calificar />} />
        <Route path="/ver-calificaciones-empresa" element={<VerCalificaciones />} />
        <Route path="/consultar" element={<Consultar />} />


    </Routes>
);

export default RutasAlumnos;