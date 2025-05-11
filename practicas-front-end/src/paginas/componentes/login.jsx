import React, { useState } from "react";
import Header from './componentes/Header';
import "./styles.css";

const Login = ({ onLogin }) => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (correo && password) {
      onLogin?.(correo, password);
      setMensaje("Sesión iniciada correctamente.");
    } else {
      setMensaje("Por favor llena todos los campos.");
    }
  };

  return (
    <div>
      <Header />

      <section id="loginForm">
        <h1>Inicio de Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <div className="form-actions">
            <input type="submit" value="Iniciar Sesión" />
          </div>
        </form>
        <p>¿No tienes una cuenta? <a href="/registro">Regístrate aquí</a></p>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </section>
    </div>
  );
};

export default Login;
