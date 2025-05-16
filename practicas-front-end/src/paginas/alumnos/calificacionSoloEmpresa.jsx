import React from 'react';
import './calificacionSoloEmpresa.css';

const CalificacionEmpresa = () => {
  // Datos de la empresa
  const empresa = {
    nombre: "Empresa Ejemplo S.A.",
    logo: "/img/user.png",
    calificacion: 4.5,
    opinionesTotal: 15,
    opiniones: [
      {
        usuario: "Juan Pérez",
        calificacion: 4,
        texto: "Excelente experiencia laboral, aprendí mucho durante mi estancia."
      },
      {
        usuario: "María González",
        calificacion: 3,
        texto: "Buen ambiente de trabajo, aunque a veces falta organización."
      },
      {
        usuario: "Carlos López",
        calificacion: 5,
        texto: "La mejor empresa para trabajar, totalmente recomendada."
      }
    ]
  };

  // Componente para mostrar estrellas
  const RatingStars = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`estrellita ${i <= rating ? 'active' : ''}`}
        >
          ★
        </span>
      );
    }
    return <section className="rating-display">{stars}</section>;
  };

  return (
    <div>
      {/* Head con los metadatos y enlaces */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <title>Calificacion de empresa</title>
      </head>

      <body>
        <header>
          <section id="nomUDG">
            <img src="../img/udg_white.png" alt="UDG Logo" />
          </section>
          <nav className="menu">
            <ul>
              <li><a href="/principalAlumno">INICIO</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <article id="TituloNombreEmpresa">
            <h1>Opiniones y calificacion de {empresa.nombre}</h1>
          </article>

          <article className="InformacionCalificacionEmpresa">
            <section className="LogoDeLaEmpresa">
              <img id="logoempresa" src={empresa.logo} alt="Logo de la empresa" />
            </section>

            <section className="Calificacion">
              <section className="Barras">
                {/* Aquí irían las barras de calificación si las implementas */}
              </section>
              <section className="NuCalificacionMasEstrellas">
                <p className="CalificacionNumero">{empresa.calificacion}</p>
                <RatingStars rating={Math.round(empresa.calificacion)} />
                <p className="NumeroOpinones">{empresa.opinionesTotal} opiniones</p>
              </section>
            </section>
          </article>

          <article className="OpinionesYEstrellasUsuario">
            <section>
              {empresa.opiniones.map((opinion, index) => (
                <section key={index} className="EspacioOpinionUsuarios">
                  <p className="NombreUsuarioOpinion">{opinion.usuario}</p>
                  <RatingStars rating={opinion.calificacion} />
                  <p className="OpinionUsuarioTexto">{opinion.texto}</p>
                </section>
              ))}
            </section>
          </article>
        </main>
      </body>
    </div>
  );
};

export default CalificacionEmpresa;