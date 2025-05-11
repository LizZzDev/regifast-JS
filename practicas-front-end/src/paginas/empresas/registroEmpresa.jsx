// src/components/RegistroEmpresa.jsx
import React, { useState } from 'react';
import { crearUsuario } from '../../api/usuarios';
import "./RegistroEmpresa.css";

const RegistroEmpresa = () => {
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
  });

  const [mensaje, setMensaje] = useState('');
  const [fuerza, setFuerza] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });


    if (name === 'descripcion') {
      const palabras = value.trim().split(/\s+/).filter(Boolean);
      if (palabras.length > 150) {
        const cortado = palabras.slice(0, 150).join(' ');
        setFormData((prev) => ({ ...prev, descripcion: cortado }));
        alert('No puedes ingresar más de 150 palabras en la descripción.');
      }
    }

    if (name === 'password') {
      evaluarFuerzaContraseña(value);
    }
  };

  const evaluarFuerzaContraseña = (password) => {
    let score = 0;
    if (password.length >= 6) score++;
    if (/[A-Za-z]/.test(password) && /\d/.test(password)) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;

    if (score === 0) setFuerza('Muy débil');
    else if (score === 1) setFuerza('Débil');
    else if (score === 2) setFuerza('Media');
    else setFuerza('Fuerte');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setMensaje('Las contraseñas no coinciden.');
      return;
    }

    // datosEmpresa debe coincidir con tu backend
    const datosEmpresa = {
      Nombre: formData.nombre,
      Descripcion: formData.descripcion,
      Telefono: formData.telefono,
      RFC: formData.rfc,
      Actividades: formData.actividades,
      Vacantes: formData.vacantes,
      Calle: formData.calle,
      Numero: formData.numero,
      Colonia: formData.colonia,
      CodigoPostal: formData.codigo_postal,
      Estado: formData.estado,
      Municipio: formData.municipio,
      Logo: formData.imagen, // Asegúrate de que el backend acepte archivos;
    };

     try {
      await crearUsuario({
        correo: formData.correo,
        contrasena: formData.password,
        nombre: formData.nombre,
        rol: 'empresa',
        datosEmpresa,
        datosJefeDepartamento: null, // si no aplica, mándalo como null
      });

    setMensaje('Empresa registrada exitosamente.');
  } catch (error) {
    console.error('Error al registrar empresa:', error);
    setMensaje('Error al registrar empresa.');
  }
};

return (
  <div>
    <header>
      <section id="nomUDG">
        <img src="img/Logo_UDG_horiz_blanco-01.svg" alt="Logo UDG" />
      </section>
      <nav className="menu">
        <ul>
          <li><a href="/inicioSesion">INICIO</a></li>
        </ul>
      </nav>
    </header>

    <article id="Formulario">
      <section id="Titulo">
        <h1>PRACTICAS PROFESIONALES</h1>
      </section>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Datos Generales</legend>
          <input name="nombre" placeholder="Nombre de la empresa" value={formData.nombre} onChange={handleChange} required />
          <input name="descripcion" placeholder="Descripción de la empresa (máx. 150 palabras)" value={formData.descripcion} onChange={handleDescripcion} required />
          <input type="email" name="correo" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} required />
          <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} pattern="\d{10,15}" required />
          <input name="rfc" placeholder="RFC" value={formData.rfc} onChange={handleChange} pattern="[A-Z0-9]{12,13}" required />
          <input name="actividades" placeholder="Actividades para estudiantes" value={formData.actividades} onChange={handleChange} required />
          <input name="vacantes" placeholder="Cantidad de vacantes" value={formData.vacantes} onChange={handleChange} pattern="\d+" required />
          <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handlePasswordChange} required />
          {fuerzaPassword && <div style={{ color: fuerzaPassword.color }}>{fuerzaPassword.texto}</div>}
          <input type="password" name="confirm_password" placeholder="Confirmar Contraseña" value={formData.confirm_password} onChange={handleChange} required />
        </fieldset>

        <fieldset>
          <legend>Domicilio Fiscal</legend>
          <input name="calle" placeholder="Calle" value={formData.calle} onChange={handleChange} required />
          <input name="numero" placeholder="Número exterior (opcional)" value={formData.numero} onChange={handleChange} />
          <input name="colonia" placeholder="Colonia" value={formData.colonia} onChange={handleChange} required />
          <input name="codigo_postal" placeholder="Código Postal" value={formData.codigo_postal} onChange={handleChange} pattern="\d{5}" required />
          <input name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange} required />
          <input name="municipio" placeholder="Municipio" value={formData.municipio} onChange={handleChange} required />
        </fieldset>

        <fieldset>
          <legend>Subir Logotipo</legend>
          <p>Sube el logotipo de tu empresa en formato JPG o PNG</p>
          <input type="file" name="imagen" accept="image/png, image/jpeg" onChange={handleChange} required />
        </fieldset>

        <input id="MandarInformacion" type="submit" value="Guardar" />
      </form>
      {mensaje && <p>{mensaje}</p>}
    </article>
  </div>
);
};

export default RegistroEmpresa;