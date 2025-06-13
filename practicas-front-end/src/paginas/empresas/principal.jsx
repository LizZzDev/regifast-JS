import React, { useEffect, useState } from 'react';
import { obtenerEmpresa } from '../../api/empresas';
import './principal.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../../src/componentes/header';

function PrincipalEmpresa() {
  console.log ("shi")
  const [empresa, setEmpresa] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const cargarEmpresa = async () => {

      try {
        const datos = await obtenerEmpresa();
        console.log (datos);
        setEmpresa(datos);
      } catch (error) {
        console.error('Error al cargar empresa:', error);
      }
    };

    cargarEmpresa();
  }, []);

    const handleOpiniones = (idEmpresa) => {
      navigate(`ver-calificaciones-empresa/${idEmpresa}`);
  };

  return (
    <div className="montserrat">
      <Header/>
      
      <section id="generalPrincipal">
        {/* Columna izquierda */}
        <article id="contentLeft">
          <article id="articleImagen">
            <img src={`http://localhost:3000/logos/${empresa.Logo}`} id="imagenEmpresa" alt={`Logo de ${empresa.Nombre}`} />
          </article>
          
          <article id="calificacionPrincipal">
            <a href="#" onClick={() => handleOpiniones(empresa.IdEmpresa)} id="aOpiniones">
              <h4 id="opiniones">Calificación</h4>
            </a>
            <hr /><br />
           
          </article>
          
          <article id="articleDatos">
            <p>Número:</p>
            <p className="secundarioDatos montserratChiquita">{empresa.Telefono}</p><br />
            <p>Dirección:</p>
            <p className="secundarioDatos montserratChiquita">{empresa.DomicilioFiscal}</p><br />
            <p>Correo electrónico:</p>
            <p className="secundarioDatos montserratChiquita">{empresa.Correo}</p><br />
          </article>
        </article>

        {/* Columna derecha */}
        <article id="contentRight">
          <article id="nombreEmpresa">
            <h1 id="h1empresa">¡Hola, {empresa.Nombre}!</h1>
            <hr />
          </article>
          
          <article id="articleDescripcion">
            <h4>Descripción</h4>
            <p className="montserratChiquita">
              {empresa.Descripcion}
            </p>
          </article>
          
          <article id="containerTareas">
            {/* Actividades */}
            <section className="infoCard">
              <h3><i className="fas fa-tasks"></i> Actividades asignadas</h3>
              <p className="montserratChiquita">{empresa.Actividades}</p>
            </section>

            {/* Vacantes */}
            <section className="infoCard">
              <h3><i className="fas fa-briefcase"></i> Vacantes disponibles</h3>
              <p className="montserratChiquita">{empresa.Vacantes}</p>
            </section>
          </article>
        </article>
      </section>
    </div>
  );
}

export default PrincipalEmpresa;