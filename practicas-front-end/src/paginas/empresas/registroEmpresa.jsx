import React, { useState } from "react";
import { crearUsuario } from "../../api/usuarios/index.js";
import Header from "../../componentes/header.jsx";
import "./registro.css";

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
    imagen: null, // La imagen es seleccionada, pero no se enviará como archivo
  });

  const [mensaje, setMensaje] = useState('');
  const [fuerza, setFuerza] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'imagen') {
      setFormData({ ...formData, imagen: files[0].name }); // Almacenamos solo el nombre del archivo
    } else {
      setFormData({ ...formData, [name]: value });
    }

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
      Logo: formData.imagen,
    };

    try {
      await crearUsuario({
        correo: formData.correo,
        contrasena: formData.password,
        nombre: formData.nombre,
        rol: 'empresa',
        datosEmpresa,
        datosJefeDepartamento: null,
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
          <img src="/img/udg_white.png" alt="Logo UDG" />
        </section>
      </header>
    <nav class="menu">
        <ul>
            <li><a href="principal.html">INICIO</a></li>
        </ul>
    </nav>
      <article id="Formulario">
        <section id="Titulo">
          <h1>PRACTICAS PROFESIONALES</h1>
        </section>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <fieldset>
            <legend>Datos Generales</legend>
            <input type="text" name="nombre" placeholder="Nombre de la empresa" value={formData.nombre} onChange={handleChange} required />
            <input type="text" name="descripcion" id="descripcion" placeholder="Descripción de la empresa (máx. 150 palabras)" value={formData.descripcion} onChange={handleChange} required />
            <input type="email" name="correo" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} required />
            <input type="text" name="telefono" placeholder="Teléfono (10-15 dígitos)" pattern="\\d{10,15}" value={formData.telefono} onChange={handleChange} required />
            <input type="text" name="rfc" placeholder="RFC (12-13 caracteres alfanuméricos)" pattern="[A-Z0-9]{12,13}" value={formData.rfc} onChange={handleChange} required />
            <input type="text" name="actividades" placeholder="Actividades que serán asignadas a los estudiantes" value={formData.actividades} onChange={handleChange} required />
            <input type="text" name="vacantes" placeholder="Cantidad de vacantes" pattern="\\d+" value={formData.vacantes} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" value={formData.confirmPassword} onChange={handleChange} required />
            <div style={{ color: fuerzaContraseña.includes("fuerte") ? "green" : fuerzaContraseña.includes("media") ? "goldenrod" : fuerzaContraseña.includes("débil") ? "orange" : "red" }}>
              {fuerzaContraseña}
            </div>
          </fieldset>

          <fieldset>
            <legend>Domicilio Fiscal</legend>
            <input type="text" name="calle" placeholder="Calle" value={formData.calle} onChange={handleChange} required />
            <input type="text" name="numero" placeholder="Número exterior (opcional)" value={formData.numero} onChange={handleChange} />
            <input type="text" name="colonia" placeholder="Colonia" value={formData.colonia} onChange={handleChange} required />
            <input type="text" name="codigo_postal" placeholder="Código Postal (5 dígitos)" pattern="\\d{5}" value={formData.codigo_postal} onChange={handleChange} required />
            <input type="text" name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange} required />
            <input type="text" name="municipio" placeholder="Municipio" value={formData.municipio} onChange={handleChange} required />
          </fieldset>

          <fieldset>
            <legend>Subir Logotipo</legend>
            <p>Sube el logotipo de tu empresa en formato JPG o PNG</p>
            <input type="file" name="imagen" accept="image/png, image/jpeg" onChange={handleChange} required />
          </fieldset>

          <input id="MandarInformacion" type="submit" value="Guardar" />
        </form>
      </article>
    </div>
  );
};

export default RegistroEmpresa;