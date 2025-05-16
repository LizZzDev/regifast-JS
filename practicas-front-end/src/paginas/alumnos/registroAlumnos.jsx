import React, { useState } from 'react';
import '../empresas/registro.css';
import './registroAlumnos.css';

const RegistroAlumnos = () => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    // Datos Escolares
    codigo: '',
    nombre: '',
    carreras: '',
    grado: '',
    grupo: '',
    turno: '',
    
    // Datos Generales
    domicilio: '',
    colonia: '',
    municipio: '',
    edad: '',
    NSS: '',
    movil: '',
    numero: '',
    cp: '',
    estado: '',
    nacionalidad: '',
    correo: '',
    telefono: '',
    emergencia: '',
    
    // Datos Familiares
    nomPadre: '',
    telPadre: '',
    nomMadre: '',
    telMadre: ''
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
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validación de campos requeridos
    const requiredFields = [
      'codigo', 'nombre', 'carreras', 'grado', 'grupo', 'turno',
      'domicilio', 'colonia', 'municipio', 'edad', 'NSS', 'movil',
      'numero', 'cp', 'estado', 'nacionalidad', 'telefono', 'emergencia',
      'nomPadre', 'telPadre', 'nomMadre', 'telMadre'
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

    const telefonos = ['movil', 'telefono', 'emergencia', 'telPadre', 'telMadre'];
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

    setErrors(newErrors);
    return isValid;
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    
    if (validateForm()) {
      if (window.confirm('¿Estás seguro de que deseas mandar la información? Una vez realizado no se puede modificar.')) {
        // Aquí iría la lógica para enviar los datos al backend
        console.log('Datos enviados:', formData);
        // Ejemplo: fetch('/api/registro', { method: 'POST', body: JSON.stringify(formData) })
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
              name="codigo"
              placeholder="Código"
              value={formData.codigo}
              onChange={handleChange}
              className={errors.codigo ? 'error' : ''}
              required
            />
            {errors.codigo && <span className="error-message">{errors.codigo}</span>}
            
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              className={errors.nombre ? 'error' : ''}
              required
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
            
            <select
              name="carreras"
              value={formData.carreras}
              onChange={handleChange}
              className={errors.carreras ? 'error' : ''}
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
            {errors.carreras && <span className="error-message">{errors.carreras}</span>}
            
            <select
              name="grado"
              value={formData.grado}
              onChange={handleChange}
              className={errors.grado ? 'error' : ''}
              required
            >
              <option value="">Selecciona tu grado</option>
              <option value="8vo">8°</option>
              <option value="6to">6°</option>
            </select>
            {errors.grado && <span className="error-message">{errors.grado}</span>}
            
            <select
              name="grupo"
              value={formData.grupo}
              onChange={handleChange}
              className={errors.grupo ? 'error' : ''}
              required
            >
              <option value="">Selecciona tu grupo</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            {errors.grupo && <span className="error-message">{errors.grupo}</span>}
            
            <select
              name="turno"
              value={formData.turno}
              onChange={handleChange}
              className={errors.turno ? 'error' : ''}
              required
            >
              <option value="">Selecciona tu turno</option>
              <option value="Matutino">Matutino</option>
              <option value="Vespertino">Vespertino</option>
            </select>
            {errors.turno && <span className="error-message">{errors.turno}</span>}
          </fieldset>

          {/* Datos Generales */}
          <fieldset>
            <legend>Datos Generales</legend>
            
            {[
              { name: 'domicilio', placeholder: 'Domicilio', type: 'text' },
              { name: 'colonia', placeholder: 'Colonia', type: 'text' },
              { name: 'municipio', placeholder: 'Municipio', type: 'text' },
              { 
                name: 'edad', 
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
                name: 'movil', 
                placeholder: 'Móvil', 
                type: 'number',
                error: errors.movil
              },
              { 
                name: 'numero', 
                placeholder: 'Número exterior', 
                type: 'number',
                error: errors.numero
              },
              { 
                name: 'cp', 
                placeholder: 'Código Postal', 
                type: 'number',
                error: errors.cp
              },
              { name: 'estado', placeholder: 'Estado', type: 'text' },
              { name: 'nacionalidad', placeholder: 'Nacionalidad', type: 'text' },
              { 
                name: 'correo', 
                placeholder: 'Correo electrónico', 
                type: 'email',
                disabled: true,
                error: errors.correo
              },
              { 
                name: 'telefono', 
                placeholder: 'Teléfono fijo', 
                type: 'number',
                error: errors.telefono
              },
              { 
                name: 'emergencia', 
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
              { name: 'nomPadre', placeholder: 'Nombre del padre', type: 'text' },
              { 
                name: 'telPadre', 
                placeholder: 'Teléfono del padre', 
                type: 'number',
                error: errors.telPadre
              },
              { name: 'nomMadre', placeholder: 'Nombre de la madre', type: 'text' },
              { 
                name: 'telMadre', 
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

          <input 
            id="MandarInformacion" 
            type="submit" 
            value="Guardar" 
          />
        </form>
      </article>
    </div>
  );
};

export default RegistroAlumnos;