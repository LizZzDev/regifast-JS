import React from 'react';
import './header.css'; 
import { useNavigate } from 'react-router-dom';
import { cerrarSesion } from '../../api/usuarios';

const Header = () => {
  const navigate = useNavigate();

  const manejarCerrarSesion = async (e) => {
    e.preventDefault(); 

    try {
      await cerrarSesion(); 
      navigate('/alumno/'); 
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
                <li> <a href="/alumno/principal">INICIO</a> </li>
                <li> <a href="/alumno/registro">REGISTRO DE DATOS</a> </li>
                <li> <a href="/alumno/consultar">CONSULTAR OFERTA</a> </li>
                <li> <a href="/alumno/documentos">DOCUMENTOS</a> </li>
              <li><a href="#" onClick={manejarCerrarSesion}>SALIR</a></li>
            </ul>
        </nav>
      </header>
  );
};

export default Header;
