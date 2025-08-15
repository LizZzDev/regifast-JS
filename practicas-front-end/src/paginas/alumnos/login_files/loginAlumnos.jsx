import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../componentes/header.jsx";
import { iniciarSesion } from "../../../api/usuarios/index.js";
import "./styles.css";  

const LoginAlumnos = ({ onLogin }) => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();


    if (correo && password) {
      try {

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
        }else {
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
        <form>
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
            <button type="button" id="boton-inicio" onClick={handleSubmit}>Iniciar Sesión</button>
          </div>
        </form>
        <div class="links">
          <a id="olvidasteContra" href="/recuperar-contra" target="_blank">¿Olvidaste tu contraseña?</a>
          <a id="registrate" href="/alumno/crear-cuenta">Regístrate aquí</a>
        </div>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </section>
    </div>
  );
}
  export default LoginAlumnos;