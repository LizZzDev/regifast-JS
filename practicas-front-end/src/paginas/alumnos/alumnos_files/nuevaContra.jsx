import React, { useState } from "react";
import "./NuevaContrasena.css";

const NuevaContrasena = () => {
  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mostrarNueva, setMostrarNueva] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
  const [errores, setErrores] = useState("");

  const togglePassword = (tipo) => {
    if (tipo === "nueva") setMostrarNueva(!mostrarNueva);
    else setMostrarConfirmar(!mostrarConfirmar);
  };

  const validarContrasena = (contrasena) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(contrasena);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarContrasena(nueva)) {
      setErrores("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.");
      return;
    }
    if (nueva !== confirmar) {
      setErrores("Las contraseñas no coinciden.");
      return;
    }
    setErrores("");
    // Aquí va la lógica para enviar la nueva contraseña al backend
    alert("Contraseña cambiada con éxito.");
  };

  return (
    <div id="nueva-container">
      <form id="nueva-form" onSubmit={handleSubmit}>
        <h2 id="nueva-title">Crear Nueva Contraseña</h2>
        <p id="nueva-description">Introduce tu nueva contraseña y confírmala</p>

        <div id="nueva-group1" className="password-group">
          <input
            type={mostrarNueva ? "text" : "password"}
            id="nueva"
            placeholder="Nueva contraseña"
            value={nueva}
            onChange={(e) => setNueva(e.target.value)}
            required
          />
          <svg
            className="toggle-icon"
            onClick={() => togglePassword("nueva")}
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5C21.27 8.11 17 4.5 12 4.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
        </div>

        <div id="nueva-group2" className="password-group">
          <input
            type={mostrarConfirmar ? "text" : "password"}
            id="confirmar"
            placeholder="Confirmar contraseña"
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
            required
          />
          <svg
            className="toggle-icon"
            onClick={() => togglePassword("confirmar")}
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5C21.27 8.11 17 4.5 12 4.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
        </div>

        {errores && <p style={{ color: "red", textAlign: "center" }}>{errores}</p>}

        <button id="nueva-button" type="submit">Cambiar contraseña</button>
      </form>
    </div>
  );
};

export default NuevaContrasena;
