import React, { useEffect, useState } from 'react';
import './calificacionSoloEmpresa.css';
import { obtenerEmpresa } from '../../api/empresas';
import { obtenerCalificacionesEmpresa } from '../../api/alumnos';
import Header from '../../componentes/alumnos/header';

const CalificacionEmpresa = () => {
   const [empresa, setEmpresa] = useState([]);
    const [datosCalificacion, setDatosCalificacion] = useState([]);

  useEffect(() => {
      const cargarEmpresa = async () => {
        try {
          const datos = await obtenerEmpresa();
          setEmpresa(datos.empresa);
        } catch (error) {
          console.error('Error al cargar empresas:', error);
        }
      };
  
      cargarEmpresa();
    }, []); 
  
  useEffect(() => {
      const cargarOpiniones = async () => {
        try {
          const datos = await obtenerCalificacionesEmpresa();
          setDatosCalificacion(datos.datosCalificacion);
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
      <Header/>

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
              <p className="CalificacionNumero">{datosCalificacion.calificacion}</p>
              <RatingStars rating={Math.round(datosCalificacion.calificacion)} />
              <p className="NumeroOpinones">{datosCalificacion.opinionesTotal} opiniones</p>
            </section>
          </section>
        </article>

        <article className="OpinionesYEstrellasUsuario">
          <section>
            {datosCalificacion.opiniones.map((opinion, index) => (
              <section key={index} className="EspacioOpinionUsuarios">
                <p className="NombreUsuarioOpinion">{opinion.usuario}</p>
                <RatingStars rating={opinion.Calificacion} />
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
