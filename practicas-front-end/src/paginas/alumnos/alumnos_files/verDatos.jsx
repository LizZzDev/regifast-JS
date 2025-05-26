import React, { useState, useEffect } from 'react';
import './verDatos.css';
import Header from '../../../componentes/alumnos/header';
import { obtenerAlumno } from '../../../api/alumnos';
import { obtenerEmpresaParaUsuario } from '../../../api/alumnos';

const PerfilAlumno = () => {
  const [alumno, setAlumno] = useState({});
  const [empresa, setEmpresa] = useState({});

  useEffect(() => {
    const CargarAlumno = async () => {
      try {
        const response = await obtenerAlumno();
                console.log (response)

        setAlumno(response.alumno);
      } catch (error) {
        alert("No se pudo obtener el alumno", error.response.data.message);
      }
    };
    CargarAlumno();
}, []); 

  useEffect(() => {
    const CargarEmpresa = async () => {
      if (alumno.IdEmpresa != null) {
        try {
          const response = await obtenerEmpresaParaUsuario(alumno.IdEmpresa);
          console.log (response.empresa)
          setEmpresa(response);
        } catch (error) {
          alert("No se pudo obtener la empresa", error.response?.data?.message || error.message);
        }
      }
    };

    CargarEmpresa();
  }, [alumno.IdEmpresa]);

  return (
    <>
      <Header /> 
      <div id="contenedor-principal-alumno">
        <h2 id="titulo-principal-alumno">Perfil del Alumno</h2>

        <section id="seccion-datos-alumno">
          <h3 id="subtitulo-datos-alumno">Datos del Alumno</h3>
          <div className="contenedor-grid-alumno">
            <label id="etiqueta-codigo-alumno">Código: {alumno?.Codigo}</label>
            <label id="etiqueta-nombre-alumno">Nombre: {alumno?.NombreCompleto}</label>
            <label id="etiqueta-carrera-alumno">Carrera: {alumno?.Carrera}</label>
            <label id="etiqueta-grado-alumno">Grado: {alumno?.Grado}</label>
            <label id="etiqueta-grupo-alumno">Grupo: {alumno?.Grupo}</label>
            <label id="etiqueta-turno-alumno">Turno: {alumno?.Turno}</label>
            <label id="etiqueta-domicilio-alumno">Domicilio: {alumno?.Domicilio}</label>
            <label id="etiqueta-colonia-alumno">Colonia: {alumno?.Colonia}</label>
            <label id="etiqueta-municipio-alumno">Municipio: {alumno?.Municipio}</label>
            <label id="etiqueta-edad-alumno">Edad: {alumno?.Edad}</label>
            <label id="etiqueta-nss-alumno">NSS: {alumno?.NSS}</label>
            <label id="etiqueta-movil-alumno">Móvil: {alumno?.Movil}</label>
            <label id="etiqueta-numero-casa-alumno">Número de Casa: {alumno?.NumeroCasa}</label>
            <label id="etiqueta-cp-alumno">Código Postal: {alumno?.CodigoPostal}</label>
            <label id="etiqueta-estado-alumno">Estado: {alumno?.Estado}</label>
            <label id="etiqueta-nacionalidad-alumno">Nacionalidad: {alumno?.Nacionalidad}</label>
            <label id="etiqueta-correo-alumno">Correo: {alumno?.CorreoInstitucional}</label>
            <label id="etiqueta-telefono-alumno">Teléfono: {alumno?.Telefono}</label>
            <label id="etiqueta-telefono-emergencia-alumno">Teléfono Emergencia: {alumno?.TelefonoEmergencia}</label>
            <label id="etiqueta-padre-alumno">Padre: {alumno?.NombrePadre} </label>
            <label id="etiqueta-padre-telefono-alumno">Telefono del padre: {alumno?.TelefonoPadre} </label>
            <label id="etiqueta-madre-alumno">Madre: {alumno?.NombreMadre} </label>
            <label id="etiqueta-madre-telefono-alumno">Telefono de la madre: {alumno?.TelefonoMadre} </label>
            {(alumno?.Calificacion != null && alumno?.Ordinario != null) ? (
              <>
                <label id="etiqueta-calificacion">Calificación: {alumno.Calificacion}</label>
                <label id="etiqueta-ordinario">Regular o Irregular: {alumno.Ordinario === 1 ? "Regular" : "Irregular"}</label>
              </>
            ) : null}
          </div>
        </section>

        {/* Sección: Empresa asignada */}
        <section id="seccion-empresa-asignada">
          <h3 id="subtitulo-empresa-asignada">Empresa Asignada</h3>
          {!empresa ? (
            <div className="contenedor-grid-empresa">
              <label id="etiqueta-nombre-empresa">Nombre: {empresa?.Nombre}</label>
              <label id="etiqueta-correo-empresa">Correo: {empresa?.Correo}</label>
              <label id="etiqueta-telefono-empresa">Teléfono: {empresa?.Telefono}</label>
              <label id="etiqueta-descripcion-empresa">Descripción: {empresa?.Descripcion}</label>
              <label id="etiqueta-actividades-empresa">Actividades: {empresa?.Actividades}</label>
              <label id="etiqueta-calle-empresa">Domicilio: {empresa?.DomicilioFiscal}</label>
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