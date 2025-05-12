import React, { useState } from "react";
import "./crearJefeDepto.css";

function crearJefeDepartamento() {
  const [formData, setFormData] = useState({
    nombreDepto: "",
    passwordDepto: "",
    carreras: "BTDC"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar los datos al servidor Node.js / Express
    fetch("http://localhost:3001/crear-jefe-departamento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),  // Convertir datos del formulario a JSON
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Jefe de departamento creado correctamente") {
          alert("Usuario creado correctamente.");
        } else {
          alert("Error al crear usuario.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="page">
      <header>
        <section id="nomUDG">
          <img src="img/Logo_UDG_horiz_blanco-01.svg" alt="Logo UDG" />
        </section>
        <nav className="menu">
          <ul>
            <li><a href="12estadistica.php">INICIO</a></li>
            <li><a href="10TablaAlumnos.php">ALUMNOS</a></li>
            <li className="dropdown">
              <a href="#">EMPRESAS</a>
              <div className="submenu2">
                <a href="10TablaEmpresas.php" className="opcion">Verificadas</a>
                <a href="10TablaEmpresasSinVerificar.php" className="opcion">Sin verificar</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">OPCIONES</a>
              <div className="submenu2">
                <a href="13NuevoAdmin.php" className="opcion">Crear nuevo admin</a>
                <a href="20jefeDepartamento.php" className="opcion">Crear jefe de departamento</a>
                <a href="13CerrarSesion.php" className="opcion">Cerrar sesión</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="titleA">
          <h2>Crear Nuevo Usuario</h2>
        </section>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombreDepto"
              value={formData.nombreDepto}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña / NIP:</label>
            <input
              type="password"
              id="password"
              name="passwordDepto"
              value={formData.passwordDepto}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lang">Carrera que coordinas:</label>
            <select
              name="carreras"
              id="lang"
              value={formData.carreras}
              onChange={handleChange}
            >
              <option value="BTDC">BTDC</option>
              <option value="BTQM">BTQM</option>
              <option value="TPAL">TPAL</option>
              <option value="TPEI">TPEI</option>
              <option value="TPMF">TPMF</option>
              <option value="TPMI">TPMI</option>
              <option value="TPPL">TPPL</option>
              <option value="TPPQ">TPPQ</option>
              <option value="TPSI">TPSI</option>
            </select>
          </div>

          <div className="form-group center">
            <input type="submit" value="Crear Usuario" id="crear" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default crearJefeDepartamento;