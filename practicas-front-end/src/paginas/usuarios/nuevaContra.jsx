import React, { useState } from "react";
import "./nuevaContra.css";

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
  <span className="toggle-icon" onClick={() => togglePassword("nueva")}>
    {mostrarNueva ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

{/* Para el input "confirmar contraseña" */}
<div id="nueva-group2" className="password-group">
  <input
    type={mostrarConfirmar ? "text" : "password"}
    id="confirmar"
    placeholder="Confirmar contraseña"
    value={confirmar}
    onChange={(e) => setConfirmar(e.target.value)}
    required
  />
  <span className="toggle-icon" onClick={() => togglePassword("confirmar")}>
    {mostrarConfirmar ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

        {errores && <p style={{ color: "red", textAlign: "center" }}>{errores}</p>}

        <button id="nueva-button" type="submit">Cambiar contraseña</button>
      </form>
    </div>
  );
};

export default NuevaContrasena;
