
import React, { useState } from "react";
import './recuperarContra.css';
import {generarTokenRecuperarContrasena} from '../../api/usuarios';

const RecuperarContra = () => {
  const [correo, setCorreo] = useState("");
  
  const handleSubmit = async (e) => {
     e.preventDefault();
    try {
      const recuperar = await generarTokenRecuperarContrasena (correo)
      alert("El link se envio exitosamente al correo. Revisa el correo.");
      console.log (recuperar)
    } catch (error) {
      alert(error);
    }
  }

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
        <form id="recuperar-form" className="form-box" onSubmit={handleSubmit}>
          <h2 id="recuperar-title">Recuperar Contraseña</h2>
          <p id="recuperar-description">Introduce tu correo para enviarte un enlace de recuperación</p>
          <input
            id="recuperar-input"
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <button id="recuperar-button" type="submit">Enviar enlace</button>
        </form>
      </div>
    </div>
  );
};
export default RecuperarContra;

