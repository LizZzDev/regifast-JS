import React from 'react';
import './calificacionSoloEmpresa.css';

const CalificacionEmpresa = () => {
   const [empresa, setEmpresa] = useState([]);
    const [opiniones, setOpiniones] = useState([]);

  useEffect(() => {
      const cargarEmpresas = async () => {
        try {
          const validada = true;
          const datos = await obtenerEmpresas({validada});
          setEmpresa(datos.empresa);
        } catch (error) {
          console.error('Error al cargar empresas:', error);
        }
      };
  
      cargarEmpresas();
    }, []); // <--- TE FALTABA ESTE CORCHETE CERRANDO EL useEffect
  



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
      <header>
        <section id="nomUDG">
          <img src="/img/udg_white.png" alt="UDG Logo" />
        </section>
        <nav className="menu">
          <ul>
            <li><a href="/principalAlumno">INICIO</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <article id="TituloNombreEmpresa">
          <h1>Opiniones y calificación de {empresa.nombre}</h1>
        </article>

        <article className="InformacionCalificacionEmpresa">
          <section className="LogoDeLaEmpresa">
            <img id="logoempresa" src={empresa.logo} alt="Logo de la empresa" />
          </section>

          <section className="Calificacion">
            <section className="Barras">
              {/* Aquí puedes implementar barras de calificación si lo deseas */}
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
    </div>
  );
};

export default CalificacionEmpresa;
