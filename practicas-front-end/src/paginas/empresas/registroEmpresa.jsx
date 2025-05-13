import React, { useState } from "react";
import { crearEmpresa } from "../../api/empresas/index.js";
import Header from "../../componentes/header.jsx";

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
      setFormData({ ...formData, imagen: files[0] }); // Almacenamos solo el nombre del archivo
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

  const form = new FormData();

  form.append('correo', formData.correo);
  form.append('contrasena', formData.password);
  form.append('nombre', formData.nombre);
  form.append('rol', 'empresa');

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
  };

  form.append('datosEmpresa', JSON.stringify(datosEmpresa));

  if (formData.imagen instanceof File) {
    form.append('imagen', formData.imagen); 
  }

     try 
     { await crearEmpresa(form);

    setMensaje('Empresa registrada exitosamente.');
  } catch (error) {
    console.error('Error al registrar empresa:', error);
    setMensaje('Error al registrar empresa.');
  }
};

  return (
    <div className="registro-container">
      <Header />
      <h2>Registro de Empresa</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre de la empresa" value={formData.nombre} onChange={handleChange} required />
        <textarea name="descripcion" placeholder="Descripción (máx. 150 palabras)" value={formData.descripcion} onChange={handleChange} required />

        <input type="email" name="correo" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} required />
        <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
        <input type="text" name="rfc" placeholder="RFC" value={formData.rfc} onChange={handleChange} required />
        <input type="text" name="actividades" placeholder="Actividades" value={formData.actividades} onChange={handleChange} required />
        <input type="number" name="vacantes" placeholder="Vacantes" value={formData.vacantes} onChange={handleChange} required />

        <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirm_password" placeholder="Confirmar contraseña" value={formData.confirm_password} onChange={handleChange} required />
        <div>Fuerza: {fuerza}</div>

        <input type="text" name="calle" placeholder="Calle" value={formData.calle} onChange={handleChange} required />
        <input type="text" name="numero" placeholder="Número exterior" value={formData.numero} onChange={handleChange} />
        <input type="text" name="colonia" placeholder="Colonia" value={formData.colonia} onChange={handleChange} required />
        <input type="text" name="codigo_postal" placeholder="Código Postal" value={formData.codigo_postal} onChange={handleChange} required />
        <input type="text" name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange} required />
        <input type="text" name="municipio" placeholder="Municipio" value={formData.municipio} onChange={handleChange} required />

        <input type="file" name="imagen" accept="image/png, image/jpeg" onChange={handleChange} required />

        <button type="submit">Registrar Empresa</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default RegistroEmpresa;