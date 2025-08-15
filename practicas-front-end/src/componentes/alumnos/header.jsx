import React, { useEffect, useState } from 'react';
import './header.css'; 
import { useNavigate } from 'react-router-dom';
import { cerrarSesion } from '../../api/usuarios';
import { obtenerAlumno, obtenerEmpresasParaUsuario } from '../../api/alumnos';

const Header = () => {
  const navigate = useNavigate();

  const [etapa, setEtapa] = useState(null);
  const [puedeConsultarOferta, setPuedeConsultarOferta] = useState();

 useEffect(() => {
  const verificarAccesos = async () => {
    try {
      const Alumno = await obtenerAlumno();
      const etapaActual = Alumno?.alumno?.BarraStatus;
      if (!etapaActual || etapaActual == undefined) {
         setEtapa(0) 
      } else {
          setEtapa(etapaActual);
      }

      try {
        const obtener = await obtenerEmpresasParaUsuario({}, false); 
        if (obtener) {
          setPuedeConsultarOferta(true);
        }
      } catch (error) {
        if (error?.response?.status === 409) {
          setPuedeConsultarOferta(false);
        }
              navigate('/alumno/principal'); 
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
  <header id="header-alumnos"> 
    <section id="header-alumnos-nomUDG"> 
      <a href="https://www.udg.mx/es">
        <img src="/img/udg_white.png" alt="Descripción" />
      </a>
    </section>
    <nav className="menu"> 
      <ul>
        <li><a href="/alumno/principal">INICIO</a></li>
        {(etapa === 0) && (
          <li><a href="/alumno/registro">REGISTRO DE DATOS</a></li>
        )}
        {etapa == 2 && puedeConsultarOferta && (
          <li><a href="/alumno/consultar"> CONSULTAR OFERTA</a></li>
        )}

        {etapa !== 0 && etapa > 2 && (
          <li><a href="/alumno/documentos">DOCUMENTOS</a></li>
        )}
        {etapa !== 0 && etapa == 4 && (
          <li><a href="/alumno/calificar">OPINION</a></li>
        )}

        <li className="dropdown">
          <img src="../../img/usuario.png" alt="perfil_alumno" />
          <div className="dropdown-content">
             {etapa !== 0 && etapa > 0 && (
              <a href="/alumno/ver-perfil">Perfil</a>
            )}
            <a href="#" onClick={manejarCerrarSesion}>Salir</a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
);
};

export default Header;