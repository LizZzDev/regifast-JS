import React, { useState } from 'react';
import './principal.css'; // Asegúrate de tener este archivo CSS

function PrincipalEmpresa() {
  // Estado para los datos dinámicos de la empresa
  const [empresa, setEmpresa] = useState({
    nombre: 'NOMBRE_EMPRESA',
    logo: 'RUTA_DEL_LOGO_EMPRESA',
    calificacion: 3.5,
    telefono: 'NUMERO_TELEFONO',
    direccion: 'DIRECCION_COMPLETA',
    correo: 'CORREO_EMPRESA',
    descripcion: 'DESCRIPCION_EMPRESA',
    vacantes: 45,
    actividades: 'pipi'
  });

  // Función para renderizar las estrellas de calificación
  const renderEstrellas = () => {
    const estrellas = [];
    const estrellasLlenas = Math.floor(empresa.calificacion);
    const tieneMedia = empresa.calificacion % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= estrellasLlenas) {
        estrellas.push(<i key={i} className="fas fa-star EstrellitasCalificacion"></i>);
      } else if (i === estrellasLlenas + 1 && tieneMedia) {
        estrellas.push(<i key={i} className="fas fa-star-half-alt EstrellitasCalificacion"></i>);
      } else {
        estrellas.push(<i key={i} className="far fa-star EstrellitasCalificacion"></i>);
      }
    }
    
    return estrellas;
  };

  return (
    <div className="montserrat">
      <header>
        <article id="nomUDG">
          <img src="/img/udg_white.png" alt="UDG Logo" />
        </article>
      </header>
      
      <section id="generalPrincipal">
        {/* Columna izquierda */}
        <article id="contentLeft">
          <article id="articleImagen">
            <img src={empresa.logo} id="imagenEmpresa" alt={`Logo de ${empresa.nombre}`} />
          </article>
          
          <article id="calificacionPrincipal">
            <a href="17calificacionSoloEmpresa.html" id="aOpiniones">
              <h4 id="opiniones">Calificación</h4>
            </a>
            <hr /><br />
            <div className="estrellas">
              {renderEstrellas()}
              <span className="calificacionPromedio">{empresa.calificacion}/5</span>
            </div>
          </article>
          
          <article id="articleDatos">
            <p>Número:</p>
            <p className="secundarioDatos montserratChiquita">{empresa.telefono}</p><br />
            <p>Dirección:</p>
            <p className="secundarioDatos montserratChiquita">{empresa.direccion}</p><br />
            <p>Correo electrónico:</p>
            <p className="secundarioDatos montserratChiquita">{empresa.correo}</p><br />
          </article>
        </article>

        {/* Columna derecha */}
        <article id="contentRight">
          <article id="nombreEmpresa">
            <h1 id="h1empresa">¡Hola, {empresa.nombre}!</h1>
            <hr />
          </article>
          
          <article id="articleDescripcion">
            <h4>Descripción</h4>
            <p className="montserratChiquita">
              {empresa.descripcion}
            </p>
          </article>
          
          <article id="containerTareas">
            {/* Actividades */}
            <section className="infoCard">
              <h3><i className="fas fa-tasks"></i> Actividades asignadas</h3>
              <p className="montserratChiquita">{empresa.actividades}</p>
            </section>

            {/* Vacantes */}
            <section className="infoCard">
              <h3><i className="fas fa-briefcase"></i> Vacantes disponibles</h3>
              <p className="montserratChiquita">{empresa.vacantes}</p>
            </section>

            {/* Botón editar */}
            <section id="sectionEditar">
              <button type="button" onClick={() => window.location.href = 'editar.html'}>
                EDITAR
              </button>
            </section>
          </article>
        </article>
      </section>
    </div>
  );
}

export default PrincipalEmpresa;