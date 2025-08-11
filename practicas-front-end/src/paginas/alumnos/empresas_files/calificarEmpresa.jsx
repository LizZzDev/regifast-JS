import React, { useEffect, useState } from 'react';
import './calificarEmpresa.css';
import Header from '../../../componentes/alumnos/header';
import { useNavigate } from 'react-router-dom';
import { calificarEmpresa, mostrarEmpresaSeleccionada } from '../../../api/alumnos';
import { API_BASE_URL } from '../../../api/constantes/router';

const CalificarEmpresa = () => {
  const [empresa, setEmpresa] = useState({});
  const [rating, setRating] = useState(0);
  const [opinion, setOpinion] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
        const cargarEmpresa = async () => {
          try {
            const datos = await mostrarEmpresaSeleccionada();
            setEmpresa(datos);
          } catch (error) {
            console.error('Error al cargar empresa:', error);
          }
        };
    
        cargarEmpresa();
      }, []);
    

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleOpinionChange = (e) => {
    setOpinion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (rating === 0) {
        alert("Por favor, selecciona una calificación.");
        return;
      }

      const data = {
        Opinion: opinion,
        Calificacion: rating
      }
      await calificarEmpresa (data);
      alert("Opinión enviada exitosamente.");
      navigate('/alumno/principal');

    } catch (error) {
        console.error('Error al registrar alumno:', error);
        alert("Error al registrar la opinion.");
    }
    
  };

  return (
    <div>
      <Header/>
      
      <main>
        <article className="InformacionEmpresa">
          <section id='ContenedorNombreEmpresa'>
            <h1>{empresa.Nombre}</h1>
          </section>

          <section id='ContenedorLogoEmpresa'>
            <img id="imglogoempresa" src={`${API_BASE_URL}/logos/${empresa.Logo}`} alt="LogoEmpresa" />
          </section>

          <section id='ContenedorDescripcionEmpresa'>
            <p>{empresa.Descripcion}</p>
          </section>
        </article>

        <article id="OpinionEmpresa">
          <form onSubmit={handleSubmit}>
            <section id="EstrellasDadas">
              <p id="TituloOpinionEmpresa">Opinión de la empresa</p>
              <fieldset className="rating">
                <legend>Calificación</legend>
                <input 
                  type="radio" 
                  id="stars1" 
                  name="rate" 
                  value="1" 
                  checked={rating === 1}
                  onChange={() => handleRatingChange(1)}
                />
                <label htmlFor="stars1" title="5 estrella">★</label>
            
                <input 
                  type="radio" 
                  id="stars2" 
                  name="rate" 
                  value="2" 
                  checked={rating === 2}
                  onChange={() => handleRatingChange(2)}
                />
                <label htmlFor="stars2" title="4 estrellas">★</label>
            
                <input 
                  type="radio" 
                  id="stars3" 
                  name="rate" 
                  value="3" 
                  checked={rating === 3}
                  onChange={() => handleRatingChange(3)}
                />
                <label htmlFor="stars3" title="3 estrellas">★</label>
            
                <input 
                  type="radio" 
                  id="stars4" 
                  name="rate" 
                  value="4" 
                  checked={rating === 4}
                  onChange={() => handleRatingChange(4)}
                />
                <label htmlFor="stars4" title="2 estrellas">★</label>
            
                <input 
                  type="radio" 
                  id="stars5" 
                  name="rate" 
                  value="5" 
                  checked={rating === 5}
                  onChange={() => handleRatingChange(5)}
                />
                <label htmlFor="stars5" title="1 estrellas">★</label>
              </fieldset>
            </section>

            <section id="OpinionDada">
              <textarea 
                id="RecudroOpinion" 
                rows="4" 
                name="Opinion" 
                required 
                placeholder="Describe tu experiencia en la empresa..."
                value={opinion}
                onChange={handleOpinionChange}
              ></textarea>
                          
              <input id="EnviarOpinion" type="submit" value="Enviar" />
            </section>
          </form>
        </article>
      </main>
    </div>
  );
};

export default CalificarEmpresa;