import React from 'react';
import './header.css'; 

const Header = () => {
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
                <li> <a href="/alumno/">DOCUMENTOS</a> </li>
                <li> <a href="/alumno/">SALIR</a> </li>

            </ul>
        </nav>
      </header>
  );
};

export default Header;
