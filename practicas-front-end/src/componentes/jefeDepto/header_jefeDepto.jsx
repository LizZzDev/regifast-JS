import React from "react";
import "./header_jefeDepto.css";
import { useNavigate } from 'react-router-dom';
import { cerrarSesion } from '../../api/usuarios';


const HeaderJefeDepto = () => {
    const navigate = useNavigate();
    
      const manejarCerrarSesion = async (e) => {
        e.preventDefault(); 

        try {
              await cerrarSesion(); 
              navigate('/jefe'); 
            } catch (error) {
              console.error("Error al cerrar sesión", error);
            }
        };
  return (
    <header>
      <section id="nomUDG">
        <a href="https://www.udg.mx/es">
          <img src="/img/udg_white.png" alt="Descripción" />
        </a>
      </section>
      <nav className="menu">
        <ul>
          <li><a href="principal">INICIO</a></li>
          <li><a href="alumnos">ALUMNOS</a></li>        
          <li><a href="#" onClick={manejarCerrarSesion}>SALIR</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderJefeDepto;
