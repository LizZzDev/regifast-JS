import React, { useEffect, useState } from 'react';
import './header.css'; 
import { useNavigate } from 'react-router-dom';
import { cerrarSesion } from '../../api/usuarios';
import { obtenerBarraStatus, obtenerEmpresasParaUsuario } from '../../api/alumnos';

const Header = () => {
  const navigate = useNavigate();

  const [etapa, setEtapa] = useState(null);
  const [puedeConsultarOferta, setPuedeConsultarOferta] = useState(true);

 useEffect(() => {
  const verificarAccesos = async () => {
    try {
      const etapaActual = await obtenerBarraStatus();
      setEtapa(etapaActual);

      try {
        await obtenerEmpresasParaUsuario({}, false); 
        setPuedeConsultarOferta(true);
      } catch (error) {
        if (error?.response?.status === 409) {
          setPuedeConsultarOferta(false);
        }
      }

    } catch (error) {
      console.error('Error al obtener etapa o acceso a empresas:', error);
    }
  };

  verificarAccesos();
}, []);
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
  <header id="header-alumnos"> {/* ID único añadido aquí */}
    <section id="header-alumnos-nomUDG"> {/* ID único para esta sección */}
      <a href="https://www.udg.mx/es">
        <img src="/img/udg_white.png" alt="Descripción" />
      </a>
    </section>
    <nav className="menu"> 
      <ul>
        <li><a href="/alumno/principal">INICIO</a></li>
        {(etapa === null) && (
          <li><a href="/alumno/registro">REGISTRO DE DATOS</a></li>
        )}
        {etapa !== null && etapa < 4 && puedeConsultarOferta && (
          <li><a href="/alumno/consultar">CONSULTAR OFERTA</a></li>
        )}

        {etapa !== null && etapa > 3 && (
          <li><a href="/alumno/documentos">DOCUMENTOS</a></li>
        )}
        {etapa !== null && etapa == 3 && (
          <li><a href="/alumno/calificar">OPINION</a></li>
        )}

        <li className="dropdown">
          <img src="../../img/usuario.png" alt="perfil_alumno" />
          <div className="dropdown-content">
            <a href="/alumno/ver-datos">Ver perfil</a>
            <a href="#" onClick={manejarCerrarSesion}>Salir</a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
);
};

export default Header;