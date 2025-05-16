import React, { useState } from "react";
import "./crearJefeDepto.css";

function CrearNuevoAdmin() {
  const [formData, setFormData] = useState({
    correoAdmin: "",
    passwordDepto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/crear-admin", { // ruta pa modificar (enlazar)
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Admin creado correctamente") {
          alert("Admin creado correctamente.");
        } else {
          alert("Error al crear admin.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="page">
      <header>
        <section id="nomUDG">
          <img src="./img/udg_white.png" alt="Logo UDG" />
        </section>
        <nav className="menu">
          <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="#">ALUMNOS</a></li>
            <li className="dropdown">
              <a href="#">EMPRESAS</a>
              <div className="submenu2">
                <a href="#" className="opcion">Verificadas</a>
                <a href="#" className="opcion">Sin verificar</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">OPCIONES</a>
              <div className="submenu2">
                <a href="#">Crear nuevo admin</a>
                <a href="#">Crear jefe de departamento</a>
                <a href="#">Cerrar sesión</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="titleA">
          <h2>Crear Nuevo Admin</h2>
        </section>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="correoIns">Correo electrónico institucional:</label>
            <input
              type="email"
              id="correoIns"
              name="correoAdmin"
              value={formData.correoAdmin}
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

          <div className="form-group center">
            <input type="submit" value="Crear Usuario" id="crear" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default CrearNuevoAdmin;
