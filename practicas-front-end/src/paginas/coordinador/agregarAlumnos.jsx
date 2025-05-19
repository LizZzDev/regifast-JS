import React, { useState } from 'react';
import './agregarAlumnos.css';

function RegistroAlumnoCoord() {
  const [formData, setFormData] = useState({
    Codigo: '',
    NombreCompleto: '',
    Carrera: '',
    Grado: '',
    Grupo: '',
    Turno: '',
    Domicilio: '',
    Colonia: '',
    Municipio: '',
    Edad: '',
    NSS: '',
    Movil: '',
    NumeroCasa: '',
    CodigoPostal: '',
    Estado: '',
    Nacionalidad: '',
    correo: '',
    Telefono: '',
    TelefonoEmergencia: '',
    NombrePadre: '',
    TelefonoPadre: '',
    NombreMadre: '',
    TelefonoMadre: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="registro-alumno-container">
      <h2 id="titulo-formulario-alumno">Registro de Alumno (Coordinador)</h2>
      <form onSubmit={handleSubmit} className="formulario-alumno">
        {/* Datos Escolares */}
        <input id="input-codigo" name="Codigo" placeholder="Código" onChange={handleChange} />
        <input id="input-nombre" name="NombreCompleto" placeholder="Nombre Completo" onChange={handleChange} />
        <input id="input-carrera" name="Carrera" placeholder="Carrera" onChange={handleChange} />
        <input id="input-grado" name="Grado" placeholder="Grado" onChange={handleChange} />
        <input id="input-grupo" name="Grupo" placeholder="Grupo" onChange={handleChange} />
        <input id="input-turno" name="Turno" placeholder="Turno" onChange={handleChange} />

        {/* Datos Generales */}
        <input id="input-domicilio" name="Domicilio" placeholder="Domicilio" onChange={handleChange} />
        <input id="input-colonia" name="Colonia" placeholder="Colonia" onChange={handleChange} />
        <input id="input-municipio" name="Municipio" placeholder="Municipio" onChange={handleChange} />
        <input id="input-edad" name="Edad" placeholder="Edad" onChange={handleChange} />
        <input id="input-nss" name="NSS" placeholder="NSS" onChange={handleChange} />
        <input id="input-movil" name="Movil" placeholder="Móvil" onChange={handleChange} />
        <input id="input-numerocasa" name="NumeroCasa" placeholder="Número de Casa" onChange={handleChange} />
        <input id="input-codigopostal" name="CodigoPostal" placeholder="Código Postal" onChange={handleChange} />
        <input id="input-estado" name="Estado" placeholder="Estado" onChange={handleChange} />
        <input id="input-nacionalidad" name="Nacionalidad" placeholder="Nacionalidad" onChange={handleChange} />
        <input id="input-correo" name="correo" placeholder="Correo Electrónico" onChange={handleChange} />
        <input id="input-telefono" name="Telefono" placeholder="Teléfono" onChange={handleChange} />
        <input id="input-telefonoemergencia" name="TelefonoEmergencia" placeholder="Teléfono de Emergencia" onChange={handleChange} />

        {/* Datos Familiares */}
        <input id="input-nombrepadre" name="NombrePadre" placeholder="Nombre del Padre" onChange={handleChange} />
        <input id="input-telefonopadre" name="TelefonoPadre" placeholder="Teléfono del Padre" onChange={handleChange} />
        <input id="input-nombremadre" name="NombreMadre" placeholder="Nombre de la Madre" onChange={handleChange} />
        <input id="input-telefonomadre" name="TelefonoMadre" placeholder="Teléfono de la Madre" onChange={handleChange} />

        <button id="btn-registrar-alumno" type="submit">Registrar Alumno</button>
      </form>
    </div>
  );
}

export default RegistroAlumnoCoord;