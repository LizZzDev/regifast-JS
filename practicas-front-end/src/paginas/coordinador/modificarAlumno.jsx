import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './modificarAlumnos.css';

const EditarDatosAlumno = () => {
  const { codigo } = useParams();
  const navigate = useNavigate();
  const [alumno, setAlumno] = useState({
    Codigo: '',
    NombreCompleto: '',
    Carrera: '',
    Grado: '',
    Grupo: '',
    Turno: '',
    Domicilio: '',
    NumeroCasa: '',
    Colonia: '',
    CodigoPostal: '',
    Municipio: '',
    Estado: '',
    Telefono: '',
    TelefonoEmergencia: '',
    CorreoInstitucional: '',
    NSS: '',
    Edad: '',
    Nacionalidad: '',
    NombrePadre: '',
    TelefonoPadre: '',
    NombreMadre: '',
    TelefonoMadre: '',
    Movil: ''
  });

  useEffect(() => {
    const fetchAlumno = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/alumnos/${codigo}`);
        setAlumno(response.data);
      } catch (error) {
        console.error("Error al obtener datos del alumno:", error);
        alert("Error al cargar datos del alumno");
      }
    };

    fetchAlumno();
  }, [codigo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/alumnos/${codigo}`, alumno);
      alert("Cambios guardados exitosamente");
      navigate('/alumnos');
    } catch (error) {
      console.error("Error al guardar cambios:", error);
      alert("Error al guardar cambios");
    }
  };

  const handleValidar = async () => {
    try {
      await axios.post(`http://localhost:3001/alumnos/${codigo}/validar`);
      alert("Alumno validado exitosamente");
      navigate('/alumnos');
    } catch (error) {
      console.error("Error al validar alumno:", error);
      alert("Error al validar alumno");
    }
  };

  return (
    <div>
      <header>
        <section id="nomUDG">
          <img src="img/Logo_UDG_horiz_blanco-01.svg" alt="UDG Logo" />
        </section>
        <nav className="menu">
          <ul>
            <li><a href="/">INICIO</a></li>
            <li>
              <section id="navegacion1">
                <a href="/alumnos" id="datalist">ALUMNOS</a>
              </section>
            </li>
            <li>
              <section id="navegacion2">
                <a href="">EMPRESAS</a>
                <datalist className="submenu2">
                  <a href="/empresas" className="opcion">Verificadas</a>
                  <a href="/empresas/sin-verificar" className="opcion">Sin verificar</a>
                </datalist>
              </section>
            </li>
            <li>
              <section id="navegacion2">
                <a href="">OPCIONES</a>
                <datalist className="submenu2">
                  <a href="/nuevo-admin" className="opcion">Crear nuevo admin</a>
                  <a href="/jefe-departamento" className="opcion">Crear jefe de departamento</a>
                  <a href="/cerrar-sesion" className="opcion">Cerrar sesion</a>
                </datalist>
              </section>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="contenido">
          <form onSubmit={handleSubmit}>
            <h1 className="montserrat em" id="abajo">Edite el campo deseado</h1>
            <fieldset id="margen1">
              <fieldset id="formulario">
                <fieldset id="titulo"><h2 className="montserrat em" id="resaltado">DATOS ESCOLARES</h2></fieldset>
                
                <fieldset id="primer">
                  <input 
                    type="number" 
                    name="Codigo" 
                    placeholder="221821756" 
                    value={alumno.Codigo} 
                    id="codigo" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                    readOnly
                  />
                  <input 
                    type="text" 
                    name="NombreCompleto" 
                    placeholder="Liz Cruz Gomez" 
                    value={alumno.NombreCompleto} 
                    id="nombre" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="text" 
                    id="carreras" 
                    list="carreras1" 
                    name="Carrera" 
                    placeholder="TPSI" 
                    value={alumno.Carrera} 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                  <datalist id="carreras1">
                    <option value="TPEI"></option>
                    <option value="TPMI"></option>
                    <option value="TPP"></option>
                    <option value="TPPQ"></option>
                    <option value="TPSI"></option>
                    <option value="TPQAPA"></option>
                  </datalist>

                  <fieldset id="segundo">
                    <input 
                      type="text" 
                      id="grado" 
                      list="grados" 
                      name="Grado" 
                      placeholder="8vo" 
                      value={alumno.Grado} 
                      className="montserrat resaltado"
                      onChange={handleChange}
                    />
                    <datalist id="grados">
                      <option value="8vo"></option>
                    </datalist>
                    <input 
                      type="text" 
                      id="grupo" 
                      list="grupos" 
                      name="Grupo" 
                      placeholder="A" 
                      value={alumno.Grupo} 
                      className="montserrat resaltado"
                      onChange={handleChange}
                    />
                    <datalist id="grupos">
                      <option value="A"></option>
                      <option value="B"></option>
                    </datalist>
                    <input 
                      type="text" 
                      id="turno" 
                      list="turnos" 
                      name="Turno" 
                      placeholder="Matutino" 
                      value={alumno.Turno} 
                      className="montserrat resaltado"
                      onChange={handleChange}
                    />
                    <datalist id="turnos">
                      <option value="Vespertino"></option>
                      <option value="Matutino"></option>
                    </datalist>
                  </fieldset>
                </fieldset>

                <fieldset id="titulo2"><h2 className="montserrat em" id="resaltado">DATOS GENERALES</h2></fieldset>
                
                <fieldset id="primera">
                  <input 
                    type="text" 
                    name="Domicilio" 
                    placeholder="Domicilio" 
                    value={alumno.Domicilio} 
                    id="domicilio" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="number" 
                    name="NumeroCasa" 
                    placeholder="Num#" 
                    value={alumno.NumeroCasa} 
                    id="num" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="text" 
                    name="Colonia" 
                    placeholder="Colonia" 
                    value={alumno.Colonia} 
                    id="col" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="number" 
                    name="CodigoPostal" 
                    placeholder="C.P" 
                    value={alumno.CodigoPostal} 
                    id="cp" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="text" 
                    name="Municipio" 
                    placeholder="Municipio" 
                    value={alumno.Municipio} 
                    id="mun" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  /> 
                </fieldset>

                <fieldset id="segundos">
                  <input 
                    type="text" 
                    name="Estado" 
                    placeholder="estado" 
                    value={alumno.Estado} 
                    id="estado" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="number" 
                    name="Telefono" 
                    placeholder="Telefono" 
                    value={alumno.Telefono} 
                    id="tel" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="text" 
                    name="CorreoInstitucional" 
                    placeholder="Correo institucional" 
                    value={alumno.CorreoInstitucional} 
                    id="correo" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                </fieldset>

                <fieldset id="terceros">
                  <input 
                    type="number" 
                    name="TelefonoEmergencia" 
                    placeholder="Tel de emergencia" 
                    value={alumno.TelefonoEmergencia} 
                    id="emergencia" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="number" 
                    name="NSS" 
                    placeholder="NSS" 
                    value={alumno.NSS} 
                    id="NSS" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="text" 
                    name="Edad" 
                    placeholder="Fecha de Nacimiento" 
                    value={alumno.Edad} 
                    id="nacimiento" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="text" 
                    name="Nacionalidad" 
                    placeholder="Nacionalidad" 
                    value={alumno.Nacionalidad} 
                    id="nacionalidad" 
                    className="montserrat resaltado"
                    onChange={handleChange}
                  />
                </fieldset>

                <fieldset id="tituloFam" className="montserrat">
                  <h2 id="datosAres" className="em">DATOS FAMILIARES</h2>
                </fieldset>

                <fieldset id="padre">
                  <input 
                    type="text" 
                    name="NombrePadre" 
                    placeholder="Nombre completo del padre" 
                    value={alumno.NombrePadre} 
                    className="input1 resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="text" 
                    name="TelefonoPadre" 
                    placeholder="Teléfono del padre" 
                    value={alumno.TelefonoPadre} 
                    className="input2 resaltado"
                    onChange={handleChange}
                  />
                </fieldset>

                <fieldset id="madre">
                  <input 
                    type="text" 
                    name="NombreMadre" 
                    placeholder="Nombre completo de la madre" 
                    value={alumno.NombreMadre} 
                    className="input1 resaltado"
                    onChange={handleChange}
                  />
                  <input 
                    type="text" 
                    name="TelefonoMadre" 
                    placeholder="Teléfono de la madre" 
                    value={alumno.TelefonoMadre} 
                    className="input2 resaltado"
                    onChange={handleChange}
                  />
                </fieldset>

                <fieldset id="botones">
                  <button type="submit" id="btnFinalizar" className="montserrat">Guardar cambios</button>
                </fieldset>
              </fieldset>
            </fieldset>
          </form>

          <form onSubmit={(e) => { e.preventDefault(); handleValidar(); }}>
            <input type="hidden" name="codigoValidar" value={alumno.Codigo} />
            <button type="submit" id="btnvalidar" className="monserrat">Validar datos</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default EditarDatosAlumno;