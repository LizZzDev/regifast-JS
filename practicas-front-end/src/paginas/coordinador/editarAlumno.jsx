import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './EditarAlumno.css';
import HeaderCoordinador from '../../componentes/coordinador/header_coordinador';
import { modificarDatosAlumno, obtenerAlumno } from '../../api/coordinador';


const EditarAlumno = () => {
  const { idAlumno } = useParams();
  const [alumno, setAlumno] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const CargarAlumno = async () => {
      try {
        console.log (idAlumno);
        const response = await obtenerAlumno(idAlumno);
        console.log(response);
        setAlumno(response.alumno);
      } catch (error) {
        alert("No se pudo obtener el alumno");
      }
    };
    CargarAlumno();
  }, [idAlumno]);

  useEffect(() => {
    if (alumno) {
      setFormData({
        Codigo: alumno.Codigo || '',
        NombreCompleto: alumno.NombreCompleto || '',
        Carrera: alumno.Carrera || '',
        Grado: alumno.Grado || '',
        Grupo: alumno.Grupo || '',
        Turno: alumno.Turno || '',
        Domicilio: alumno.Domicilio || '',
        Colonia: alumno.Colonia || '',
        Municipio: alumno.Municipio || '',
        Edad: alumno.Edad || '',
        NSS: alumno.NSS || '',
        Movil: alumno.Movil || '',
        NumeroCasa: alumno.NumeroCasa || '',
        CodigoPostal: alumno.CodigoPostal || '',
        Estado: alumno.Estado || '',
        Nacionalidad: alumno.Nacionalidad || '',
        CorreoInstitucional: alumno.CorreoInstitucional || '',
        Telefono: alumno.Telefono || '',
        TelefonoEmergencia: alumno.TelefonoEmergencia || '',
        NombrePadre: alumno.NombrePadre || '',
        TelefonoPadre: alumno.TelefonoPadre || '',
        NombreMadre: alumno.NombreMadre || '',
        TelefonoMadre: alumno.TelefonoMadre || ''
      });
    }
  }, [alumno]);

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
    if (formData.CorreoInstitucional && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.CorreoInstitucional)) {
      nuevosErrores.CorreoInstitucional = 'Correo inválido';
    }
    if (formData.Movil && !/^\d{10}$/.test(formData.Movil)) nuevosErrores.Movil = '10 dígitos';
    if (formData.Telefono && !/^\d{10}$/.test(formData.Telefono)) nuevosErrores.Telefono = '10 dígitos';
    if (formData.TelefonoEmergencia && !/^\d{10}$/.test(formData.TelefonoEmergencia)) {
      nuevosErrores.TelefonoEmergencia = '10 dígitos';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      if (!validarCampos()) return;

    const cambios = {};
    for (const key in formData) {
      if (formData[key] !== alumno[key]) {
        cambios[key] = formData[key];
      }
    }

    if (Object.keys(cambios).length === 0) {
      alert("No se hicieron cambios.");
      return;
    }

    try {
        await modificarDatosAlumno(cambios, alumno.IdUsuario);
        alert("La información se modificó correctamente");
        navigate('/coordinador/alumnos');

    } catch (error) {
        alert("No se pudo realizar la modificacion:", error.response?.data?.message)
    }

    }

  return (
    <>
      <HeaderCoordinador />
      <div id="contenedor-editar-alumno">
        <h2 id="titulo-editar-alumno">Editar Datos del Alumno</h2>
        
        <form onSubmit={handleSubmit} id="form-editar-alumno">
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
                <select
                  id="input-grado"
                  name="Grado"
                  value={formData.Grado}
                  onChange={handleChange}
                >
                  <option value="">Seleccione un grado</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                </select>
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-grupo">Grupo</label>
                <select
                  id="input-grupo"
                  name="Grupo"
                  value={formData.Grupo}
                  onChange={handleChange}
                >
                  <option value="">Seleccione el grupo</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-turno">Turno</label>
                <select
                  id="input-turno"
                  name="Turno"
                  value={formData.Turno}
                  onChange={handleChange}
                >
                  <option value="">Seleccione un turno</option>
                  <option value="Matutino">Matutino</option>
                  <option value="Vespertino">Vespertino</option>
                </select>
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
                  name="CorreoInstitucional"
                  type="email"
                  value={formData.CorreoInstitucional}
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