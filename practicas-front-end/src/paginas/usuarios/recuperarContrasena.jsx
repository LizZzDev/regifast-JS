import React, { useState } from 'react';
import './recuperarContrasena.css'

const RecuperarContrasena = () => {
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
      setError('Por favor ingresa un correo válido.');
      setMensaje('');
      return;
    }

    // Aquí iría la petición al backend
    setMensaje('Si el correo existe, recibirás instrucciones para restablecer tu contraseña.');
    setError('');
    setCorreo('');
  };

  return (
  <>
    
    <div id="recuperar-container">
      <h2 id="recuperar-titulo">Recuperar Contraseña</h2>
      <form id="recuperar-formulario" onSubmit={handleSubmit}>
        <label htmlFor="recuperar-correo" id="recuperar-label">
          Correo electrónico:
        </label>
        <input
          type="email"
          id="recuperar-correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <button type="submit" id="recuperar-boton">
          Enviar instrucciones
        </button>
      </form>

      {mensaje && (
        <p id="recuperar-mensaje" style={{ color: 'green' }}>
          {mensaje}
        </p>
      )}
      {error && (
        <p id="recuperar-error" style={{ color: 'red' }}>
          {error}
        </p>
      )}
    </div>
  </>
);
};

export default RecuperarContrasena;
