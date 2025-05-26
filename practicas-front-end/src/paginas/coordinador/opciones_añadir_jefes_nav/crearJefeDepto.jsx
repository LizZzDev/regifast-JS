import React, { useState } from "react";
import "./crearAdmin.css";
import HeaderCoordinador from '../../../componentes/coordinador/header_coordinador';
import { crearUsuario } from "../../../api/usuarios";

function CrearNuevoAdmin() {
  const [formData, setFormData] = useState({
    nombre: "",
    correoAdmin: "",
    passwordDepto: "",
    carrera: ""
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
        datosJefeDepartamento: {Carrera: formData.carrera},
        rol: 'jefeDepartamento'
      } );

      alert("Usuario creado exitosamente");

      setFormData({
        nombre: "",
        correoAdmin: "",
        passwordDepto: "",
        carrera: ""
      });
      
    } catch (error) {
        alert("Error al crear el usuario: " + error.response?.data?.message);
    }
  };

  return (
    <div className="page">
      <HeaderCoordinador/>

      <main>
        <section id="titleA">
          <h2>Crear Jefe de Departamento</h2>
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

          <div className="form-group">
            <label htmlFor="nombre">Carrera:</label>
            <select
              type="text"
              id="carrera"
              name="carrera"
              value={formData.carrera}
              onChange={handleChange}
              required
            >
             <option value="carreras">Selecciona tu carrera</option>
                <option value="TPSI">TPSI</option>
                <option value="TPAL">TPAL</option>
                <option value="TPEI">TPEI</option>
                <option value="TPPQ">TPPQ</option>
                <option value="TPMF">TPMF</option>
                <option value="TPMI">TPMI</option>
                <option value="TPPL">TPPL</option>
                <option value="BTDC">BTDC</option>
                <option value="BTQM">BTQM</option>
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

export default CrearNuevoAdmin;
