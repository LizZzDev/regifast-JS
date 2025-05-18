import React, { useState } from 'react';
import '../empresas/registro.css';
import './registroAlumnos.css';
import { anadirDatosDelAlumno } from '../../api/alumnos';

const RegistroAlumnos = () => {
  // Estado para los datos del formulario
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

  // Estado para mensajes de error
  const [errors, setErrors] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario corrige
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validación del formulario
  const validateForm = async () => {
    const newErrors = {};
    let isValid = true;

    // Validación de campos requeridos
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

    // Validaciones específicas
    if (formData.edad && (parseInt(formData.edad) < 18 || parseInt(formData.edad) > 25)) {
      newErrors.edad = 'La edad debe estar entre 18 y 25 años';
      isValid = false;
    }

    if (formData.NSS && !/^\d{11}$/.test(formData.NSS)) {
      newErrors.NSS = 'El NSS debe tener 11 dígitos';
      isValid = false;
    }

    const telefonos = ['Movil', 'telefono', 'emergencia', 'telPadre', 'telMadre'];
    telefonos.forEach(tel => {
      if (formData[tel] && !/^\d{10}$/.test(formData[tel])) {
        newErrors[tel] = 'Debe tener 10 dígitos';
        isValid = false;
      }
    });

    if (formData.cp && !/^\d{5}$/.test(formData.cp)) {
      newErrors.cp = 'El código postal debe tener 5 dígitos';
      isValid = false;
    }

    if (formData.numero && parseInt(formData.numero) <= 0) {
      newErrors.numero = 'Debe ser un número válido';
      isValid = false;
    }

    if (formData.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Correo electrónico inválido';
      isValid = false;
    }

      console.log (newErrors);

    setErrors(newErrors);
    return isValid;
  };


  // Manejar envío del formulario
const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitAttempted(true);

   if (validateForm()) {
      if (window.confirm('¿Estás seguro de que deseas mandar la información? Una vez realizado no se puede modificar.')) {
        try {
          console.log("Enviando datos:", formData);
          await anadirDatosDelAlumno(formData);
          alert("Registro exitoso.");
          // Aquí podrías limpiar el formulario o redirigir, si deseas
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
    <div>
      <header>
        <section id="nomUDG">
          <img src="/img/udg_white.png" alt="Logo UDG" />
        </section>
      </header>

      <article id="Formulario">
        <section id="Titulo">
          <h1>PRACTICAS PROFESIONALES 2024-B</h1>
        </section>
        
        <form id="registroAlumnoForm" onSubmit={handleSubmit}>
          {/* Datos Escolares */}
          <fieldset>
            <legend>Datos Escolares</legend>
            
            <input
              type="text"
              name="Codigo"
              placeholder="Código"
              value={formData.Codigo}
              onChange={handleChange}
              className={errors.Codigo ? 'error' : ''}
              required
            />
            {errors.Codigo && <span className="error-message">{errors.Codigo}</span>}
            
            <input
              type="text"
              name="NombreCompleto"
              placeholder="Nombre completo"
              value={formData.NombreCompleto}
              onChange={handleChange}
              className={errors.NombreCompleto ? 'error' : ''}
              required
            />
            {errors.NombreCompleto && <span className="error-message">{errors.NombreCompleto}</span>}
            
            <select
              name="Carrera"
              value={formData.Carrera}
              onChange={handleChange}
              className={errors.Carrera ? 'error' : ''}
              required
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
            {errors.Carrera && <span className="error-message">{errors.Carrera}</span>}
            
            <select
              name="Grado"
              value={formData.Grado}
              onChange={handleChange}
              className={errors.Grado ? 'error' : ''}
              required
            >
              <option value="">Selecciona tu grado</option>
              <option value="8vo">8°</option>
              <option value="6to">6°</option>
            </select>
            {errors.Grado && <span className="error-message">{errors.Grado}</span>}
            
            <select
              name="Grupo"
              value={formData.Grupo}
              onChange={handleChange}
              className={errors.Grupo ? 'error' : ''}
              required
            >
              <option value="">Selecciona tu grupo</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            {errors.Grupo && <span className="error-message">{errors.Grupo}</span>}
            
            <select
              name="Turno"
              value={formData.Turno}
              onChange={handleChange}
              className={errors.Turno ? 'error' : ''}
              required
            >
              <option value="">Selecciona tu turno</option>
              <option value="Matutino">Matutino</option>
              <option value="Vespertino">Vespertino</option>
            </select>
            {errors.Turno && <span className="error-message">{errors.Turno}</span>}
          </fieldset>

          {/* Datos Generales */}
          <fieldset>
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
                max: 25,
                error: errors.edad
              },
              { 
                name: 'NSS', 
                placeholder: 'NSS', 
                type: 'number',
                error: errors.NSS
              },
              { 
                name: 'Movil', 
                placeholder: 'Móvil', 
                type: 'number',
                error: errors.movil
              },
              { 
                name: 'NumeroCasa', 
                placeholder: 'Número exterior', 
                type: 'number',
                error: errors.numero
              },
              { 
                name: 'CodigoPostal', 
                placeholder: 'Código Postal', 
                type: 'number',
                error: errors.cp
              },
              { name: 'Estado', placeholder: 'Estado', type: 'text' },
              { name: 'Nacionalidad', placeholder: 'Nacionalidad', type: 'text' },
              { 
                name: 'correo', 
                placeholder: 'Correo electrónico', 
                type: 'email',
                disabled: true,
                error: errors.correo
              },
              { 
                name: 'Telefono', 
                placeholder: 'Teléfono fijo', 
                type: 'number',
                error: errors.telefono
              },
              { 
                name: 'TelefonoEmergencia', 
                placeholder: 'Teléfono de emergencia', 
                type: 'number',
                error: errors.emergencia
              }
            ].map((field, index) => (
              <div key={index}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={errors[field.name] ? 'error' : ''}
                  required={!field.disabled}
                  disabled={field.disabled || false}
                  min={field.min}
                  max={field.max}
                />
                {errors[field.name] && <span className="error-message">{errors[field.name]}</span>}
              </div>
            ))}
          </fieldset>

          {/* Datos Familiares */}
          <fieldset>
            <legend>Datos Familiares</legend>
            
            {[
              { name: 'NombrePadre', placeholder: 'Nombre del padre', type: 'text' },
              { 
                name: 'TelefonoPadre', 
                placeholder: 'Teléfono del padre', 
                type: 'number',
                error: errors.telPadre
              },
              { name: 'NombreMadre', placeholder: 'Nombre de la madre', type: 'text' },
              { 
                name: 'TelefonoMadre', 
                placeholder: 'Teléfono de la madre', 
                type: 'number',
                error: errors.telMadre
              }
            ].map((field, index) => (
              <div key={index}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={errors[field.name] ? 'error' : ''}
                  required
                />
                {errors[field.name] && <span className="error-message">{errors[field.name]}</span>}
              </div>
            ))}
          </fieldset>

          <button type="submit" id="MandarInformacion">
            Guardar
          </button>
        </form>
      </article>
    </div>
  );
};

export default RegistroAlumnos;