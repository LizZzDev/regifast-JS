import React, { useState } from "react";
import "./registro_empresa.css";

function RegistroEmpresaCoordinador() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipoPractica, setTipoPractica] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!tipoPractica) {
      alert("Por favor selecciona el tipo de prácticas.");
      return;
    }

    console.log({
      nombre,
      correo,
      contrasena,
      descripcion,
      tipoPractica,
    });

    // Aquí va la lógica de envío real
  };

  return (
    <section className="form-register-empresa" id="registroEmpresaSeccion">
      <div className="form-container" id="registroEmpresaContenedor">
        <img src="./img/udg_white" alt="Logo UDG" className="logo-udg" id="logoRegistroEmpresa" />
        <h2 className="form-title" id="tituloRegistroEmpresa">Registro de Empresa (Coordinador)</h2>
        <form onSubmit={handleSubmit} id="formularioRegistroEmpresa">

          <div className="inputBox" id="inputNombreEmpresaBox">
            <label htmlFor="nombreEmpresa">Nombre de la empresa:</label>
            <input
              type="text"
              id="nombreEmpresa"
              placeholder="Nombre de la empresa"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="inputBox" id="inputCorreoEmpresaBox">
            <label htmlFor="correoEmpresa">Correo electrónico:</label>
            <input
              type="email"
              id="correoEmpresa"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="inputBox" id="inputContrasenaEmpresaBox">
            <label htmlFor="contrasenaEmpresa">Contraseña:</label>
            <input
              type="password"
              id="contrasenaEmpresa"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          <div className="inputBox" id="inputConfirmarContrasenaEmpresaBox">
            <label htmlFor="confirmarContrasenaEmpresa">Confirmar contraseña:</label>
            <input
              type="password"
              id="confirmarContrasenaEmpresa"
              placeholder="Confirmar contraseña"
              value={confirmarContrasena}
              onChange={(e) => setConfirmarContrasena(e.target.value)}
              required
            />
          </div>

          <div className="inputBox" id="inputDescripcionEmpresaBox">
            <label htmlFor="descripcionEmpresa">Descripción de la empresa:</label>
            <textarea
              id="descripcionEmpresa"
              placeholder="Escribe una breve descripción (máximo 150 palabras)"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              maxLength={150}
              required
            />
          </div>

          <div className="inputBox" id="inputTipoPracticaBox">
            <label htmlFor="tipoPractica">Tipo de prácticas:</label>
            <select
              id="tipoPractica"
              value={tipoPractica}
              onChange={(e) => setTipoPractica(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="ordinarias">Ordinarias</option>
              <option value="extraordinarias">Extraordinarias</option>
            </select>
          </div>

          <button type="submit" className="btn-submit" id="btnRegistroEmpresaCoordinador">
            Registrarse
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegistroEmpresaCoordinador;
