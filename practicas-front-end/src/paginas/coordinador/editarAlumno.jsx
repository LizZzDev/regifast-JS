import React, { useState } from 'react';
import './EditarAlumno.css';
import HeaderCoordinador from '../../componentes/coordinador/header_coordinador';

const EditarAlumno = () => {
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
    TelefonoMadre: ''
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errores[name]) {
      setErrores(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validarCampos = () => {
    const nuevosErrores = {};
    
    // Validaciones requeridas
    if (!formData.Codigo) nuevosErrores.Codigo = 'Código requerido';
    if (!formData.NombreCompleto) nuevosErrores.NombreCompleto = 'Nombre requerido';
    if (!formData.Carrera) nuevosErrores.Carrera = 'Carrera requerida';
    
    // Validaciones de formato
    if (formData.Edad && isNaN(formData.Edad)) nuevosErrores.Edad = 'Debe ser número';
    if (formData.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      nuevosErrores.correo = 'Correo inválido';
    }
    if (formData.Movil && !/^\d{10}$/.test(formData.Movil)) nuevosErrores.Movil = '10 dígitos';
    if (formData.Telefono && !/^\d{10}$/.test(formData.Telefono)) nuevosErrores.Telefono = '10 dígitos';
    if (formData.TelefonoEmergencia && !/^\d{10}$/.test(formData.TelefonoEmergencia)) {
      nuevosErrores.TelefonoEmergencia = '10 dígitos';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarCampos()) {
      console.log('Datos listos para enviar:', formData);
      // Aquí se conectaría al backend
    }
  };

  return (
    <>
      <HeaderCoordinador />
      <div id="contenedor-editar-alumno">
        <h2 id="titulo-editar-alumno">Editar Datos del Alumno</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid-formulario-alumno">
            {/* Sección Académica */}
            <div className="grupo-campos">
              <h3 className="subtitulo-grupo">Datos Académicos</h3>
              
              <div className="campo-formulario">
                <label htmlFor="input-codigo">Código</label>
                <input
                  id="input-codigo"
                  name="Codigo"
                  value={formData.Codigo}
                  onChange={handleChange}
                />
                {errores.Codigo && <span className="mensaje-error">{errores.Codigo}</span>}
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-nombre">Nombre Completo</label>
                <input
                  id="input-nombre"
                  name="NombreCompleto"
                  value={formData.NombreCompleto}
                  onChange={handleChange}
                />
                {errores.NombreCompleto && <span className="mensaje-error">{errores.NombreCompleto}</span>}
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-carrera">Carrera</label>
                <input
                  id="input-carrera"
                  name="Carrera"
                  value={formData.Carrera}
                  onChange={handleChange}
                />
                {errores.Carrera && <span className="mensaje-error">{errores.Carrera}</span>}
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-grado">Grado</label>
                <input
                  id="input-grado"
                  name="Grado"
                  value={formData.Grado}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-grupo">Grupo</label>
                <input
                  id="input-grupo"
                  name="Grupo"
                  value={formData.Grupo}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-turno">Turno</label>
                <input
                  id="input-turno"
                  name="Turno"
                  value={formData.Turno}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Sección Personal */}
            <div className="grupo-campos">
              <h3 className="subtitulo-grupo">Datos Personales</h3>
              
              <div className="campo-formulario">
                <label htmlFor="input-domicilio">Domicilio</label>
                <input
                  id="input-domicilio"
                  name="Domicilio"
                  value={formData.Domicilio}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-colonia">Colonia</label>
                <input
                  id="input-colonia"
                  name="Colonia"
                  value={formData.Colonia}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-municipio">Municipio</label>
                <input
                  id="input-municipio"
                  name="Municipio"
                  value={formData.Municipio}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-edad">Edad</label>
                <input
                  id="input-edad"
                  name="Edad"
                  value={formData.Edad}
                  onChange={handleChange}
                />
                {errores.Edad && <span className="mensaje-error">{errores.Edad}</span>}
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-nss">NSS</label>
                <input
                  id="input-nss"
                  name="NSS"
                  value={formData.NSS}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-numero-casa">Número de Casa</label>
                <input
                  id="input-numero-casa"
                  name="NumeroCasa"
                  value={formData.NumeroCasa}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-cp">Código Postal</label>
                <input
                  id="input-cp"
                  name="CodigoPostal"
                  value={formData.CodigoPostal}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-estado">Estado</label>
                <input
                  id="input-estado"
                  name="Estado"
                  value={formData.Estado}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-nacionalidad">Nacionalidad</label>
                <input
                  id="input-nacionalidad"
                  name="Nacionalidad"
                  value={formData.Nacionalidad}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Sección Contacto */}
            <div className="grupo-campos">
              <h3 className="subtitulo-grupo">Contacto</h3>
              
              <div className="campo-formulario">
                <label htmlFor="input-correo">Correo Electrónico</label>
                <input
                  id="input-correo"
                  name="correo"
                  type="email"
                  value={formData.correo}
                  onChange={handleChange}
                />
                {errores.correo && <span className="mensaje-error">{errores.correo}</span>}
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-movil">Teléfono Móvil</label>
                <input
                  id="input-movil"
                  name="Movil"
                  value={formData.Movil}
                  onChange={handleChange}
                />
                {errores.Movil && <span className="mensaje-error">{errores.Movil}</span>}
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-telefono">Teléfono Fijo</label>
                <input
                  id="input-telefono"
                  name="Telefono"
                  value={formData.Telefono}
                  onChange={handleChange}
                />
                {errores.Telefono && <span className="mensaje-error">{errores.Telefono}</span>}
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-emergencia">Teléfono Emergencia</label>
                <input
                  id="input-emergencia"
                  name="TelefonoEmergencia"
                  value={formData.TelefonoEmergencia}
                  onChange={handleChange}
                />
                {errores.TelefonoEmergencia && <span className="mensaje-error">{errores.TelefonoEmergencia}</span>}
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-padre">Nombre del Padre</label>
                <input
                  id="input-padre"
                  name="NombrePadre"
                  value={formData.NombrePadre}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-telpadre">Teléfono del Padre</label>
                <input
                  id="input-telpadre"
                  name="TelefonoPadre"
                  value={formData.TelefonoPadre}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-madre">Nombre de la Madre</label>
                <input
                  id="input-madre"
                  name="NombreMadre"
                  value={formData.NombreMadre}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-telmadre">Teléfono de la Madre</label>
                <input
                  id="input-telmadre"
                  name="TelefonoMadre"
                  value={formData.TelefonoMadre}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="contenedor-botones">
            <button type="submit" id="boton-guardar-alumno">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditarAlumno;