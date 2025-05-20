import React, { useState } from "react";
import "./crearAdmin.css";
import HeaderCoordinador from '../../componentes/coordinador/header_coordinador';
import { crearUsuario } from "../../api/usuarios";


function CrearNuevoAdmin() {
  const [formData, setFormData] = useState({
    nombre: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearUsuario ( {
        correo: formData.correoAdmin,
        contrasena: formData.passwordDepto,
        nombre: formData.nombre,
        rol: 'coordinador'
      } );
      setFormData({
        nombre: "",
        correoAdmin: "",
        passwordDepto: "",
    });
    alert("Usuario creado exitosamente");

    } catch (error) {
      alert("Error al crear usuario");
    }
  };

  return (
    <div className="page">
      <HeaderCoordinador/>

      <main>
        <section id="titleA">
          <h2>Crear Nuevo Cordinador</h2>
        </section>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombreCoordinador"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="correoIns">Correo institucional:</label>
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
