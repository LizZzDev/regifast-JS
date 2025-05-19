import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componentes/header.jsx";
import { iniciarSesion } from "../../api/usuarios/index.js";
import "./styles.css";

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
        } else {
          navigate("/no-autorizado"); 
        }
      } catch (error) {
         console.error("Error al iniciar sesión:", error);
         setMensaje("Error al iniciar sesión. Verifica tus credenciales.");
      }
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
        <p>¿No tienes una cuenta? <a href="empresa/registro">Regístrate aquí</a></p>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </section>
    </div>
  );
};

export default Login;
