import React from 'react';
import './verDatos.css';
import Header from '../../componentes/alumnos/header';

const PerfilAlumno = ({ alumno, empresa }) => {
  return (
    <>
      <Header /> {/* Componente Header como hermano (no hijo) */}
      <div id="contenedor-principal-alumno">
        <h2 id="titulo-principal-alumno">Perfil del Alumno</h2>

        {/* Sección: Datos del alumno */}
        <section id="seccion-datos-alumno">
          <h3 id="subtitulo-datos-alumno">Datos del Alumno</h3>
          <div className="contenedor-grid-alumno">
            <label id="etiqueta-codigo-alumno">Código: </label>
            <label id="etiqueta-nombre-alumno">Nombre: </label>
            <label id="etiqueta-carrera-alumno">Carrera: </label>
            <label id="etiqueta-grado-alumno">Grado: </label>
            <label id="etiqueta-grupo-alumno">Grupo: </label>
            <label id="etiqueta-turno-alumno">Turno: </label>
            <label id="etiqueta-domicilio-alumno">Domicilio: </label>
            <label id="etiqueta-colonia-alumno">Colonia: </label>
            <label id="etiqueta-municipio-alumno">Municipio: </label>
            <label id="etiqueta-edad-alumno">Edad: </label>
            <label id="etiqueta-nss-alumno">NSS: </label>
            <label id="etiqueta-movil-alumno">Móvil: </label>
            <label id="etiqueta-numero-casa-alumno">Número de Casa: </label>
            <label id="etiqueta-cp-alumno">Código Postal: </label>
            <label id="etiqueta-estado-alumno">Estado: </label>
            <label id="etiqueta-nacionalidad-alumno">Nacionalidad: </label>
            <label id="etiqueta-correo-alumno">Correo: </label>
            <label id="etiqueta-telefono-alumno">Teléfono: </label>
            <label id="etiqueta-telefono-emergencia-alumno">Teléfono Emergencia: </label>
            <label id="etiqueta-padre-alumno">Padre: - </label>
            <label id="etiqueta-madre-alumno">Madre: - </label>
          </div>
        </section>

        {/* Sección: Empresa asignada */}
        <section id="seccion-empresa-asignada">
          <h3 id="subtitulo-empresa-asignada">Empresa Asignada</h3>
          {empresa ? (
            <div className="contenedor-grid-empresa">
              <label id="etiqueta-nombre-empresa">Nombre: </label>
              <label id="etiqueta-descripcion-empresa">Descripción: </label>
              <label id="etiqueta-correo-empresa">Correo: </label>
              <label id="etiqueta-telefono-empresa">Teléfono: </label>
              <label id="etiqueta-actividades-empresa">Actividades: </label>
              <label id="etiqueta-calle-empresa">Calle:</label>
              <label id="etiqueta-numero-empresa">Número Exterior:</label>
              <label id="etiqueta-colonia-empresa">Colonia:</label>
            </div>
          ) : (
            <p id="texto-empresa-no-asignada">Aún no has sido asignado a una empresa.</p>
          )}
        </section>
      </div>
    </>
  );
};

export default PerfilAlumno;