import React, { useState } from 'react';
import './agregarEmpresas.css';
import HeaderCoordinador from '../../componentes/coordinador/header_coordinador';
import { anadirEmpresa } from '../../api/coordinador';

function RegistroEmpresaCoord() {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    correo: '',
    telefono: '',
    rfc: '',
    actividades: '',
    vacantes: '',
    calle: '',
    numero: '',
    colonia: '',
    codigo_postal: '',
    estado: '',
    municipio: '',
    imagen: null,
    carrera: '',
    tipo_empresa: '',
  });

 const handleChange = (e) => {
  const { name, value, files } = e.target;

  if (name === 'imagen') {
    setFormData({ ...formData, imagen: files[0] });
  } else if (name === 'tipo_empresa') {
    if (value === 'extraordinaria') {
      setFormData(prev => ({
        ...prev,
        rfc: 'XXX',
        calle: 'Calz. Revolución',
        numero: '1500',
        colonia: 'Olímpica',
        codigo_postal: '44420 ',
        estado: 'Jalisco',
        municipio: 'Guadalajara',
        tipo_empresa: value,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        tipo_empresa: value
      }));
    }
  } else {
    setFormData({ ...formData, [name]: value });
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await anadirEmpresa(data);
        alert('Empresa registrada exitosamente.');
        setFormData({
          nombre: '',
          descripcion: '',
          correo: '',
          telefono: '',
          rfc: '',
          actividades: '',
          vacantes: '',
          calle: '',
          numero: '',
          colonia: '',
          codigo_postal: '',
          estado: '',
          municipio: '',
          imagen: null,
          carrera: '',
          tipo_empresa: '', 
        });
        
      } catch (error) {
        console.error('Error al registrar empresa:', error);
        alert('Error al registrar empresa.');
      };
     };

  return (
    <div className="registro-container">
      <HeaderCoordinador/>
      <h2 id="titulo-formulario">Añadir empresa</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <select
          id="select-tipo-empresa"
          name="tipo_empresa"
          value={formData.tipo_empresa}
          onChange={handleChange}
        >
          <option value="">Tipo de empresa</option>
          <option value="ordinaria">Ordinaria</option>
          <option value="extraordinaria">Extraordinaria</option>
        </select>

        <input
          id="input-nombre"
          type="text"
          name="nombre"
          placeholder="Nombre de la empresa"
          value={formData.nombre}
          onChange={handleChange}
        />
        <textarea
          id="input-descripcion"
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
        ></textarea>
        <input
          id="input-correo"
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
        />
        <input
          id="input-telefono"
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
        />
        <input
          id="input-rfc"
          type="text"
          name="rfc"
          placeholder="RFC"
          value={formData.rfc}
          onChange={handleChange}
        />
        <input
          id="input-actividades"
          type="text"
          name="actividades"
          placeholder="Actividades principales"
          value={formData.actividades}
          onChange={handleChange}
        />
        <input
          id="input-vacantes"
          type="number"
          name="vacantes"
          placeholder="Vacantes disponibles"
          value={formData.vacantes}
          onChange={handleChange}
        />
        <input
          id="input-calle"
          type="text"
          name="calle"
          placeholder="Calle"
          value={formData.calle}
          onChange={handleChange}
        />
        <input
          id="input-numero"
          type="text"
          name="numero"
          placeholder="Número"
          value={formData.numero}
          onChange={handleChange}
        />
        <input
          id="input-colonia"
          type="text"
          name="colonia"
          placeholder="Colonia"
          value={formData.colonia}
          onChange={handleChange}
        />
        <input
          id="input-codigo-postal"
          type="text"
          name="codigo_postal"
          placeholder="Código Postal"
          value={formData.codigo_postal}
          onChange={handleChange}
        />
        <input
          id="input-estado"
          type="text"
          name="estado"
          placeholder="Estado"
          value={formData.estado}
          onChange={handleChange}
        />
        <input
          id="input-municipio"
          type="text"
          name="municipio"
          placeholder="Municipio"
          value={formData.municipio}
          onChange={handleChange}
        />
        <input
          id="input-imagen"
          type="file"
          name="imagen"
          onChange={handleChange}
        />

        <select
          id="select-carrera"
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
        >
          <option value="">Selecciona carrera preferida</option>
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

        <button id="btn-registrar" type="submit">
          Registrar Empresa
        </button>
      </form>
    </div>
  );
}

export default RegistroEmpresaCoord;
