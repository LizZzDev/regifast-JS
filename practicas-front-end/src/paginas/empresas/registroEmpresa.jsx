// src/components/RegistroEmpresa.jsx
import React, { useState } from 'react';
import axios from 'axios';

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
    const { name, value, files } = e.target;

    if (name === 'imagen') {
      setFormData({ ...formData, imagen: files[0] });
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

    // Construimos FormData para incluir imagen
    const payload = new FormData();
    payload.append('correo', formData.correo);
    payload.append('contrasena', formData.password);
    payload.append('nombre', formData.nombre);
    payload.append('rol', 'empresa');

    // datosEmpresa debe coincidir con tu backend
    const datosEmpresa = {
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      telefono: formData.telefono,
      rfc: formData.rfc,
      actividades: formData.actividades,
      vacantes: formData.vacantes,
      calle: formData.calle,
      numero: formData.numero,
      colonia: formData.colonia,
      codigo_postal: formData.codigo_postal,
      estado: formData.estado,
      municipio: formData.municipio,
    };

    payload.append('datosEmpresa', JSON.stringify(datosEmpresa));
    if (formData.imagen) {
      payload.append('logo', formData.imagen);
    }

    try {
      const res = await axios.post('http://localhost:3000/api/usuarios/crear', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMensaje('Empresa registrada exitosamente.');
      console.log(res.data);
    } catch (error) {
      console.error('Error al registrar empresa:', error);
      setMensaje('Error al registrar empresa.');
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro de Empresa</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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