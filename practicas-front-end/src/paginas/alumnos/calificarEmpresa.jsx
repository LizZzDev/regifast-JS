import React, { useState } from 'react';
import './calificarEmpresa.css';

const CalificarEmpresa = () => {
  // Datos de ejemplo que reemplazan los valores PHP
  const [empresaData, setEmpresaData] = useState({
    nombre: "Tech Solutions S.A.", // Reemplaza $_SESSION['empresa']
    descripcion: "Empresa dedicada al desarrollo de software empresarial con más de 10 años en el mercado.", // Reemplaza $descripcion
    logo: "/img/user.png" // Ruta del logo
  });

  const [rating, setRating] = useState(0);
  const [opinion, setOpinion] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleOpinionChange = (e) => {
    setOpinion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al servidor
    console.log({
      empresa: empresaData.nombre,
      rating,
      opinion
    });
    // Simulación de envío a "7mandarcalificacion.php"
    alert(`Calificación enviada para ${empresaData.nombre}`);
  };

  return (
    <div>
      <header>
        <section id="nomUDG">
          <img src="../img/udg_white.png" alt="UDG Logo" />
        </section>
        <nav className="menu">
          <ul>
            <li><a href="/5barra">INICIO</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <article className="InformacionEmpresa">
          <section id='ContenedorNombreEmpresa'>
            <h1>{empresaData.nombre}</h1>
          </section>

          <section id='ContenedorLogoEmpresa'>
            <img id="imglogoempresa" src={empresaData.logo} alt="LogoEmpresa" />
          </section>

          <section id='ContenedorDescripcionEmpresa'>
            <p>{empresaData.descripcion}</p>
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
                <label htmlFor="stars1" title="1 estrella">★</label>
            
                <input 
                  type="radio" 
                  id="stars2" 
                  name="rate" 
                  value="2" 
                  checked={rating === 2}
                  onChange={() => handleRatingChange(2)}
                />
                <label htmlFor="stars2" title="2 estrellas">★</label>
            
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
                <label htmlFor="stars4" title="4 estrellas">★</label>
            
                <input 
                  type="radio" 
                  id="stars5" 
                  name="rate" 
                  value="5" 
                  checked={rating === 5}
                  onChange={() => handleRatingChange(5)}
                />
                <label htmlFor="stars5" title="5 estrellas">★</label>
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