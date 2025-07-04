import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componentes/header.jsx";
import { iniciarSesion } from "../../api/usuarios/index.js";
import "./login.css";

const Login = ({ onLogin }) => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();


    if (correo && password) {
      try {
      console.log (correo, password);

        const usuario = await iniciarSesion({ correo, contrasena: password }); // llamada al backend
        onLogin?.(usuario); 
        if (usuario?.rol === "alumno") {
          navigate("/alumno/principal");
        } else if (usuario?.rol === "empresa") {
          navigate("/empresa/principal");
        } else if (usuario?.rol === "coordinador") {
          navigate("/coordinador/principal");
        } else if (usuario?.rol === "jefeDepartamento") {
          navigate("/jefe/principal");
        } else {
          navigate("/no-autorizado"); 
        }
      } catch (error) {
          const mensajeError = error.response?.data?.message || "Error al iniciar sesión. Verifica tus credenciales.";
          setMensaje(mensajeError);
          console.log (mensajeError);
          console.log("Respuesta del servidor:", error.response?.data);

      }
    } else {
      setMensaje("Por favor llena todos los campos.");
    }
  };

  return (
    <div className="full-container">
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

        <a id="recuperar" href="/recuperar-contra">¿Olvidaste tu contraseña?</a>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </section>
    </div>
  );
};

export default Login;
