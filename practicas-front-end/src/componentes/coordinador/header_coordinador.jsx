import React from "react";
import "./header_coordinador.css";
import { useNavigate } from 'react-router-dom';
import { cerrarSesion } from '../../api/usuarios';

const HeaderCoordinador = () => {
    const navigate = useNavigate();
    
      const manejarCerrarSesion = async (e) => {
        e.preventDefault(); 

        try {
              await cerrarSesion(); 
              navigate('/coordinador/'); 
            } catch (error) {
              console.error("Error al cerrar sesión", error);
            }
        };
  return (
    <header>
      <section id="nomUDG">
        <img src="../../img/udg_white.png" alt="Logo UDG" />
      </section>
      <nav className="menu">
        <ul>
          <li><a href="principal">INICIO</a></li>
          <li><a href="alumnos">ALUMNOS</a></li>

          <li className="dropdown">
            <a href="#">EMPRESAS</a>
            <div className="submenu2">
              <a href="empresas" className="opcion">Empresas</a>
              <a href="#" className="opcion">Añadir empresa</a>
            </div>
          </li>

          <li className="dropdown">
            <a href="#">OPCIONES</a>
            <div className="submenu2">
              <a href="crear-coordinador" className="opcion">Crear nuevo coordinador</a>
              <a href="crear-jefe" className="opcion">Crear jefe de departamento</a>
              <a href="#" onClick={manejarCerrarSesion}>Cerrar sesión</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderCoordinador;
