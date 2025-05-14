import React, { useState, useRef } from 'react';
import './editar.css';
import './principal.css'; // Reutilizando estilos existentes

function EditarEmpresa() {
  // Estado para los datos del formulario
  const [empresa, setEmpresa] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    direccion: '',
    descripcion: '',
    actividades: '',
    vacantes: 0,
    imagen: '/img/user.png' // Imagen por defecto
  });

  // Referencia para el input de archivo
  const fileInputRef = useRef(null);

  // Manejar cambios en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmpresa(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar cambio de imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setEmpresa(prev => ({
          ...prev,
          imagen: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Datos a guardar:', empresa);
    // Ejemplo: fetch('guardarCambios.php', { method: 'POST', body: JSON.stringify(empresa) })
  };

  return (
    <div className="montserrat">
      <header>
        <article id="nomUDG">
          <img src="/img/udg_white.png" alt="Logo UDG" />
        </article>
      </header>
      
      <nav className="menu">
        <ul>
          <li><a href="/principal">INICIO</a></li>
        </ul>
      </nav>
      
      <section id="generalPrincipal">
        {/* Columna izquierda - Imagen */}
        <article id="contentLeft">
          <article id="articleImagen">
            <img 
              src={empresa.imagen} 
              id="imagenEmpresa" 
              alt="Logo empresa"
            /><br />
            <label 
              htmlFor="imagenInput" 
              className="botonSubirImagen"
              onClick={() => fileInputRef.current.click()}
            >
              Cambiar imagen
            </label>
            <input 
              type="file" 
              id="imagenInput" 
              ref={fileInputRef}
              name="imagen" 
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </article>
        </article>

        {/* Columna derecha - Formulario */}
        <article id="contentRight">
          <form id="formEditar" onSubmit={handleSubmit}>
            <h1>Editar Datos</h1>
            <hr /><br />

            <label htmlFor="nombre">Nombre de la empresa:</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={empresa.nombre}
              onChange={handleInputChange}
              required 
            /><br /><br />

            <label htmlFor="telefono">Teléfono:</label>
            <input 
              type="text" 
              id="telefono" 
              name="telefono" 
              value={empresa.telefono}
              onChange={handleInputChange}
              required 
            /><br /><br />

            <label htmlFor="correo">Correo electrónico:</label>
            <input 
              type="email" 
              id="correo" 
              name="correo" 
              value={empresa.correo}
              onChange={handleInputChange}
              required 
            /><br /><br />

            <label htmlFor="direccion">Dirección:</label>
            <textarea 
              id="direccion" 
              name="direccion" 
              rows="3" 
              value={empresa.direccion}
              onChange={handleInputChange}
              required
            ></textarea><br /><br />

            <label htmlFor="descripcion">Descripción:</label>
            <textarea 
              id="descripcion" 
              name="descripcion" 
              rows="4" 
              maxLength="1000"
              value={empresa.descripcion}
              onChange={handleInputChange}
              required
            ></textarea><br /><br />

            <label htmlFor="actividades">Actividades:</label>
            <textarea 
              id="actividades" 
              name="actividades" 
              rows="3"
              value={empresa.actividades}
              onChange={handleInputChange}
              required
            ></textarea><br /><br />

            <label htmlFor="vacantes">Vacantes disponibles:</label>
            <input 
              type="number" 
              id="vacantes" 
              name="vacantes" 
              value={empresa.vacantes}
              onChange={handleInputChange}
              required 
              min="0" 
            /><br /><br />

            <button type="submit" id="botonGuardar">
              Guardar cambios
            </button>
          </form>
        </article>
      </section>
    </div>
  );
}

export default EditarEmpresa;