import React, { useEffect, useState } from 'react';
import './styles.css'; // Tu CSS original

const EmpresaDashboard = () => {
  const [empresa, setEmpresa] = useState(null);

  useEffect(() => {
    // Llama al backend para obtener los datos de la empresa autenticada
    fetch('/api/empresa') // Ajustá la URL según tu backend
      .then(res => {
        if (!res.ok) throw new Error('No se pudo obtener los datos');
        return res.json();
      })
      .then(data => setEmpresa(data))
      .catch(err => console.error(err));
  }, []);

  if (!empresa) return <p>Cargando datos...</p>;

  return (
    <div className="montserrat">
      <header>
        <article id="nomUDG">
          <img src="img/udg_white.png" alt="Logo UDG" />
        </article>
        <nav className="menu">
          <ul>
            <li><a href="19inicioSesion.php">INICIO</a></li>
          </ul>
        </nav>
      </header>

      <section id="generalPrincipal">
        <article id="contentLeft">
          <article id="articleImagen">
            <img src={empresa.logo} id="imagenEmpresa" alt="Logo empresa" />
          </article>

          <article id="calificacionPrincipal">
            <a href="17calificacionSoloEmpresa.html" id="aOpiniones">
              <h4 id="opiniones">Calificación</h4>
            </a>
            <hr /><br />
            <div className="estrellas">
              <i className="fas fa-star EstrellitasCalificacion"></i>
              <i className="fas fa-star EstrellitasCalificacion"></i>
              <i className="fas fa-star EstrellitasCalificacion"></i>
              <i className="fas fa-star-half-alt EstrellitasCalificacion"></i>
              <i className="far fa-star EstrellitasCalificacion"></i>
              <span className="calificacionPromedio">3.5/5</span>
            </div>
          </article>

          <article id="articleDatos">
            <p>Número:</p>
            <p className="secundarioDatos montserratChiquita">{empresa.telefono}</p><br />
            <p>Dirección:</p>
            <p className="secundarioDatos montserratChiquita">
              {`${empresa.calle} ${empresa.numero}, ${empresa.colonia}, ${empresa.codigo_postal} ${empresa.municipio}, ${empresa.estado}`}
            </p><br />
            <p>Correo electrónico:</p>
            <p className="secundarioDatos montserratChiquita">{empresa.correo}</p><br />
          </article>
        </article>

        <article id="contentRight">
          <article id="nombreEmpresa">
            <h1 id="h1empresa">¡Hola, {empresa.nombre}!</h1>
            <hr />
          </article>

          <article id="articleDescripcion">
            <h4>Descripción</h4>
            <p className="montserratChiquita">{empresa.descripcion}</p>
          </article>

          <article id="containerTareas">
            <section id="sectionTareas">
              <h3>Actividades asignadas</h3>
              <p>{empresa.actividades}</p>
            </section>
            <section id="sectionContador">
              <h2>Vacantes disponibles:</h2>
              <p>{empresa.vacantes}</p>
            </section>
            <section id="sectionEditar">
              <button type="button" onClick={() => window.location.href = '14editar.php'}>
                EDITAR
              </button>
            </section>
          </article>
        </article>
      </section>
    </div>
  );
};

export default EmpresaDashboard;
