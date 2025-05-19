import React, { useState } from 'react';
import './registro_empresa.css';

function RegistroEmpresaCoord() {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    correo: '',
    telefono: '',
    rfc: '',
    actividades: '',
    vacantes: '',
    password: '',
    confirm_password: '',
    calle: '',
    numero: '',
    colonia: '',
    codigo_postal: '',
    estado: '',
    municipio: '',
    imagen: null,
    carrera: '',
    tipo_empresa: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imagen') {
      setFormData({ ...formData, imagen: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="registro-container">
      <h2 id="titulo-formulario">Registro de Empresa (Coordinador)</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <input id="input-nombre" type="text" name="nombre" placeholder="Nombre de la empresa" onChange={handleChange} />
        <textarea id="input-descripcion" name="descripcion" placeholder="Descripción" onChange={handleChange}></textarea>
        <input id="input-correo" type="email" name="correo" placeholder="Correo electrónico" onChange={handleChange} />
        <input id="input-telefono" type="tel" name="telefono" placeholder="Teléfono" onChange={handleChange} />
        <input id="input-rfc" type="text" name="rfc" placeholder="RFC" onChange={handleChange} />
        <input id="input-actividades" type="text" name="actividades" placeholder="Actividades principales" onChange={handleChange} />
        <input id="input-vacantes" type="number" name="vacantes" placeholder="Vacantes disponibles" onChange={handleChange} />
        <input id="input-password" type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
        <input id="input-confirm-password" type="password" name="confirm_password" placeholder="Confirmar contraseña" onChange={handleChange} />
        <input id="input-calle" type="text" name="calle" placeholder="Calle" onChange={handleChange} />
        <input id="input-numero" type="text" name="numero" placeholder="Número" onChange={handleChange} />
        <input id="input-colonia" type="text" name="colonia" placeholder="Colonia" onChange={handleChange} />
        <input id="input-codigo-postal" type="text" name="codigo_postal" placeholder="Código Postal" onChange={handleChange} />
        <input id="input-estado" type="text" name="estado" placeholder="Estado" onChange={handleChange} />
        <input id="input-municipio" type="text" name="municipio" placeholder="Municipio" onChange={handleChange} />
        <input id="input-imagen" type="file" name="imagen" onChange={handleChange} />

        <select id="select-carrera" name="carrera" onChange={handleChange}>
          <option value="">Selecciona carrera preferida</option>
          <option value="TI">Tecnologías de la Información</option>
          <option value="ADM">Administración</option>
          <option value="MKT">Marketing</option>
          <option value="IND">Ingeniería Industrial</option>
        </select>

        <select id="select-tipo-empresa" name="tipo_empresa" onChange={handleChange}>
          <option value="">Tipo de empresa</option>
          <option value="ordinaria">Ordinaria</option>
          <option value="extraordinaria">Extraordinaria</option>
        </select>

        <button id="btn-registrar" type="submit">Registrar Empresa</button>
      </form>
    </div>
  );
}

export default RegistroEmpresaCoord;
