
import React from 'react';
import './RecuperarContrasena.css';

const RecuperarContrasena = () => {
  return (
    <div id="recuperar-root">
      <header id="recuperar-header">
        <article id="recuperar-logo-container">
          <img src="../img/udg_white.png" id="recuperar-logo" alt="Logo UDG" />
        </article>
        <nav id="recuperar-nav" className="menu">
          <ul>
            <li><a href="/principalAlumno">INICIO</a></li>
          </ul>
        </nav>
      </header>

      <div id="recuperar-container" className="montserrat">
        <form id="recuperar-form" className="form-box" action="/enviar-link" method="post">
          <h2 id="recuperar-title">Recuperar Contraseña</h2>
          <p id="recuperar-description">Introduce tu correo para enviarte un enlace de recuperación</p>
          <input
            id="recuperar-input"
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            required
          />
          <button id="recuperar-button" type="submit">Enviar enlace</button>
        </form>
      </div>
    </div>
  );
};

export default RecuperarContrasena; 