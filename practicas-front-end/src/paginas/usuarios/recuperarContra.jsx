import React from 'react';
import './recuperarContra.css'; // Make sure to create this CSS file
import udgLogo from '../img/udg_white.png'; // Adjust the path as needed

const RecuperarContra = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="montserrat">
      <header id="palNav">
        <article id="nomUDG">
          <img src={udgLogo} id="logo" alt="UDG Logo" />
        </article>
        <nav className="menu">
          <ul>
            <li><a href="principalAlumno.html">INICIO</a></li>
          </ul>
        </nav>
      </header>
      
      <div id="recuperar-container" className="container">
        <form 
          id="recuperar-form" 
          className="form-box" 
          onSubmit={handleSubmit}
        >
          <h2 id="recuperar-title">Recuperar Contraseña</h2>
          <p id="recuperar-description">
            Introduce tu correo para enviarte un enlace de recuperación
          </p>
          <input 
            id="recuperar-input" 
            type="email" 
            name="correo" 
            placeholder="Correo electrónico" 
            required 
          />
          <button id="recuperar-button" type="submit">
            Enviar enlace
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecuperarContra;