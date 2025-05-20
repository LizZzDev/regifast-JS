import React, { useState, useEffect } from 'react';
import './RegistroAlumnos.css';
import { anadirDatosDelAlumno, obtenerBarraStatus } from '../../api/alumnos';
import Header from '../../componentes/alumnos/header';

const RegistroAlumnos = () => {
  const [formData, setFormData] = useState({
    // Datos Escolares
    Codigo: '',
    NombreCompleto: '',
    Carrera: '',
    Grado: '',
    Grupo: '',
    Turno: '',
    
    // Datos Generales
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
    
    // Datos Familiares
    NombrePadre: '',
    TelefonoPadre: '',
    NombreMadre: '',
    TelefonoMadre: ''
  });

  const [errors, setErrors] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  
  useEffect(() => {
    const salir = async () => {
      try {
        const datos = await obtenerBarraStatus();
        if (datos >= 2) {
          alert("Tu registro de datos ya fue enviado.");
          window.location.href = '/alumno/principal';
        }
      } catch (error) {
        console.error('Error al verificar etapa del alumno:', error);
      }
    };

    salir(); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = async () => {
    const newErrors = {};
    let isValid = true;

    const requiredFields = [
      'Codigo', 'NombreCompleto', 'Carrera', 'Grado', 'Grupo', 'Turno',
      'Domicilio', 'Colonia', 'Municipio', 'Edad', 'NSS', 'Movil',
      'NumeroCasa', 'CodigoPostal', 'Estado', 'Nacionalidad', 'Telefono', 'TelefonoEmergencia',
      'NombrePadre', 'TelefonoPadre', 'NombreMadre', 'TelefonoMadre'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Este campo es requerido';
        isValid = false;
      }
    });

    if (formData.Carrera && formData.Grado) {
      const carrerasBT = ['BTDC', 'BTQM'];

      if (carrerasBT.includes(formData.Carrera)) {
        if (formData.Grado !== '6to') {
          newErrors.Grado = 'Para BTDC y BTQM el grado debe ser 6°';
          isValid = false;
        }
      } else {
        if (formData.Grado !== '8vo') {
          newErrors.Grado = 'Para esta carrera el grado debe ser 8°';
          isValid = false;
        }
      }
    }

    if (formData.Edad && (parseInt(formData.Edad) < 17 || parseInt(formData.Edad) > 25)) {
      newErrors.Edad = 'La edad debe estar entre 17 y 25 años';
      isValid = false;
    }

    if (formData.NSS && !/^\d{11}$/.test(formData.NSS)) {
      newErrors.NSS = 'El NSS debe tener 11 dígitos';
      isValid = false;
    }

    const telefonos = ['Movil', 'Telefono', 'TelefonoEmergencia', 'TelefonoPadre', 'TelefonoMadre'];
    telefonos.forEach(tel => {
      if (formData[tel] && !/^\d{10}$/.test(formData[tel])) {
        newErrors[tel] = 'Debe tener 10 dígitos';
        isValid = false;
      }
    });

    if (formData.CodigoPostal && !/^\d{5}$/.test(formData.CodigoPostal)) {
      newErrors.CodigoPostal = 'El código postal debe tener 5 dígitos';
      isValid = false;
    }

    if (formData.NumeroCasa && parseInt(formData.NumeroCasa) <= 0) {
      newErrors.NumeroCasa = 'Debe ser un número válido';
      isValid = false;
    }

    if (formData.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Correo electrónico inválido';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (validateForm()) {
      if (window.confirm('¿Estás seguro de que deseas mandar la información? Una vez realizado no se puede modificar.')) {
        try {
          console.log("Enviando datos:", formData);
          await anadirDatosDelAlumno(formData);
          alert("Registro exitoso.");
        } catch (error) {
          console.error('Error al registrar alumno:', error);
          alert("Error al registrar.");
        }
      }
    } else {
      console.log('Errores en el formulario:', errors);
    }
  };

  return (
    <div className="registro-alumno-container">
      <Header/>

      <article className="formulario-container">
        <section className="titulo-seccion">
          <h1>PRACTICAS PROFESIONALES 2024-B</h1>
        </section>
        
        <form onSubmit={handleSubmit} className="formulario-registro">
          {/* Datos Escolares */}
          <fieldset className="grupo-campos">
            <legend>Datos Escolares</legend>
            
            <div className="campo-formulario">
              <input
                type="text"
                name="Codigo"
                placeholder="Código"
                value={formData.Codigo}
                onChange={handleChange}
                className={errors.Codigo ? 'error' : ''}
              />
              {errors.Codigo && <span className="mensaje-error">{errors.Codigo}</span>}
            </div>
            
            <div className="campo-formulario">
              <input
                type="text"
                name="NombreCompleto"
                placeholder="Nombre completo"
                value={formData.NombreCompleto}
                onChange={handleChange}
                className={errors.NombreCompleto ? 'error' : ''}
              />
              {errors.NombreCompleto && <span className="mensaje-error">{errors.NombreCompleto}</span>}
            </div>
            
            <div className="campo-formulario">
              <select
                name="Carrera"
                value={formData.Carrera}
                onChange={handleChange}
                className={errors.Carrera ? 'error' : ''}
              >
                <option value="">Selecciona tu carrera</option>
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
              {errors.Carrera && <span className="mensaje-error">{errors.Carrera}</span>}
            </div>
            
            <div className="grupo-seleccionables">
              <div className="campo-formulario seleccion-corta">
                <select
                  name="Grado"
                  value={formData.Grado}
                  onChange={handleChange}
                  className={errors.Grado ? 'error' : ''}
                >
                  <option value="">Grado</option>
                  <option value="8vo">8°</option>
                  <option value="6to">6°</option>
                </select>
                {errors.Grado && <span className="mensaje-error">{errors.Grado}</span>}
              </div>
              
              <div className="campo-formulario seleccion-corta">
                <select
                  name="Grupo"
                  value={formData.Grupo}
                  onChange={handleChange}
                  className={errors.Grupo ? 'error' : ''}
                >
                  <option value="">Grupo</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
                {errors.Grupo && <span className="mensaje-error">{errors.Grupo}</span>}
              </div>
              
              <div className="campo-formulario seleccion-corta">
                <select
                  name="Turno"
                  value={formData.Turno}
                  onChange={handleChange}
                  className={errors.Turno ? 'error' : ''}
                >
                  <option value="">Turno</option>
                  <option value="Matutino">Matutino</option>
                  <option value="Vespertino">Vespertino</option>
                </select>
                {errors.Turno && <span className="mensaje-error">{errors.Turno}</span>}
              </div>
            </div>
          </fieldset>

          {/* Datos Generales */}
          <fieldset className="grupo-campos">
            <legend>Datos Generales</legend>
            
            {[
              { name: 'Domicilio', placeholder: 'Domicilio', type: 'text' },
              { name: 'Colonia', placeholder: 'Colonia', type: 'text' },
              { name: 'Municipio', placeholder: 'Municipio', type: 'text' },
              { 
                name: 'Edad', 
                placeholder: 'Edad', 
                type: 'number',
                min: 18,
                max: 25
              },
              { 
                name: 'NSS', 
                placeholder: 'NSS', 
                type: 'number'
              },
              { 
                name: 'Movil', 
                placeholder: 'Móvil', 
                type: 'number'
              },
              { 
                name: 'NumeroCasa', 
                placeholder: 'Número exterior', 
                type: 'number'
              },
              { 
                name: 'CodigoPostal', 
                placeholder: 'Código Postal', 
                type: 'number'
              },
              { name: 'Estado', placeholder: 'Estado', type: 'text' },
              { name: 'Nacionalidad', placeholder: 'Nacionalidad', type: 'text' },
              { 
                name: 'Telefono', 
                placeholder: 'Teléfono fijo', 
                type: 'number'
              },
              { 
                name: 'TelefonoEmergencia', 
                placeholder: 'Teléfono de emergencia', 
                type: 'number'
              }
            ].map((field, index) => (
              <div className="campo-formulario" key={index}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={errors[field.name] ? 'error' : ''}
                  disabled={field.disabled || false}
                  min={field.min}
                  max={field.max}
                />
                {errors[field.name] && <span className="mensaje-error">{errors[field.name]}</span>}
              </div>
            ))}
          </fieldset>

          {/* Datos Familiares */}
          <fieldset className="grupo-campos">
            <legend>Datos Familiares</legend>
            
            {[
              { name: 'NombrePadre', placeholder: 'Nombre del padre', type: 'text' },
              { 
                name: 'TelefonoPadre', 
                placeholder: 'Teléfono del padre', 
                type: 'number'
              },
              { name: 'NombreMadre', placeholder: 'Nombre de la madre', type: 'text' },
              { 
                name: 'TelefonoMadre', 
                placeholder: 'Teléfono de la madre', 
                type: 'number'
              }
            ].map((field, index) => (
              <div className="campo-formulario" key={index}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={errors[field.name] ? 'error' : ''}
                />
                {errors[field.name] && <span className="mensaje-error">{errors[field.name]}</span>}
              </div>
            ))}
          </fieldset>

          <button type="submit" className="boton-enviar">
            Guardar
          </button>
        </form>
      </article>
    </div>
  );
};

export default RegistroAlumnos;