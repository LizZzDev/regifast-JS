import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './calificacionSoloEmpresa.css';
import { obtenerCalificacionesEmpresa, obtenerEmpresaParaUsuario } from '../../api/alumnos';
import { API_BASE_URL } from '../../api/constantes/router';

const CalificacionEmpresa = () => {
  const { idEmpresa } = useParams();
   const [empresa, setEmpresa] = useState([]);
   const [datosCalificacion, setDatosCalificacion] = useState({
    calificacionFinal: 0,
    totalOpiniones: 0,
    opiniones: []
  });

  useEffect(() => {
      const cargarEmpresa = async () => {
        try {
          const datos = await obtenerEmpresaParaUsuario(idEmpresa);
          setEmpresa(datos);
          console.log (datos)
        } catch (error) {
          console.error('Error al cargar empresas:', error);
        }
      };
  
      cargarEmpresa();
    }, []); 
  
  useEffect(() => {
      const cargarOpiniones = async () => {
        try {
          const datos = await obtenerCalificacionesEmpresa(idEmpresa);
          setDatosCalificacion(datos);
          console.log (datos);
        } catch (error) {
          console.error('Error al cargar empresas:', error);
        }
      };
  
      cargarOpiniones();
    }, []); 
  


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
        <article id="nomUDG">
          <img src="/img/udg_white.png" alt="UDG Logo" />
        </article>
        <nav>
            <a href="/empresa/principal">Inicio</a>          
        </nav>
      </header>
      <main>
        <article id="TituloNombreEmpresa">
          <h1 className='colorLetra'>Opiniones y calificación de {empresa.Nombre}</h1>
        </article>

        <article className="InformacionCalificacionEmpresa">
          <section className="LogoDeLaEmpresa">
            <img id="logoempresa" src={`${API_BASE_URL}/logos/${empresa.Logo}`} alt="Logo de la empresa" />
          </section>

          <section className="Calificacion">
            <section className="Barras">
              {/* Aquí puedes implementar barras de calificación si lo deseas */}
            </section>
            <section className="NuCalificacionMasEstrellas">
              <p className="CalificacionNumero">{datosCalificacion.calificacionFinal}</p>
              <RatingStars rating={Math.round(datosCalificacion.calificacionFinal)} />
              <p className="colorLetra" id='NumeroOpinones'>{datosCalificacion.totalOpiniones} opiniones</p>
            </section>
          </section>
        </article>

        <article className="OpinionesYEstrellasUsuario">
          <section>
            {datosCalificacion.opiniones.map((opinion, index) => (
              <section key={index} className="EspacioOpinionUsuarios">
                <p className="colorLetra" id='NombreUsuarioOpinion'>{opinion.NombreUsuario}</p>
                <RatingStars rating={opinion.Calificacion} />
                <p className="OpinionUsuarioTexto, colorLetra">{opinion.Opinion}</p>
              </section>
            ))}
          </section>
        </article>
      </main>
    </div>
  );
};

export default CalificacionEmpresa;
