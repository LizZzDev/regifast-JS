import React, { useEffect, useState } from "react";
import "./ver_alumnos.css";
import { modificarDatosAlumno} from '../../api/coordinador';
import { obtenerAlumnosJefe} from '../../api/jefeDepartamento';
import HeaderJefeDepto from "../../componentes/jefeDepto/header_jefeDepto.jsx";

function TablaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);  
  const [totalAlumnos, setTotalAlumnos] = useState(0);
 
  const mapEstadoDeDB = (valor) => {
    if (valor === 1) return "ordinario";
    if (valor === 0) return "extraordinario";
    return "";
  };

  const mapEstadoParaDB = (valor) => {
    if (valor === "ordinario") return 1;
    if (valor === "extraordinario") return 0;
    return null;
  };

  const [filtros, setFiltros] = useState({
    estadoCalificacion: '',
    grado: '',
    grupo: '',
    turno: ''
  });

  useEffect(() => {
    const cargarAlumnos = async () => {
      const estadoNumerico = filtros.estadoCalificacion === "calificados"
      ? "true"
      : filtros.estadoCalificacion === "no-calificados"
        ? "false"
        : null;

       const turno = filtros.turno;
       const grado = filtros.grado;
       const grupo = filtros.grupo;

      try {

        const response = await obtenerAlumnosJefe({
            pagina: paginaActual, 
            limite: 30,
            estadoNumerico: estadoNumerico,
            turno: turno,
            grado: grado,
            grupo: grupo
        });
        const alumnosConEstado = response.alumnos.map(alumno => ({
          ...alumno,
          estado: mapEstadoDeDB(alumno.Ordinario),
          calificacion: alumno.Calificacion || ''
        }));

        const paginas = response.totalPaginas;
        setTotalAlumnos(response.total)
        setAlumnos(alumnosConEstado);
        setTotalPaginas(paginas < 1 ? 1 : paginas);
      } catch (error) {
        console.error("Error al obtener alumnos:", error);
      }
    };

    cargarAlumnos();
    }, [filtros, paginaActual]);

  const handleEstadoChange = (index, nuevoEstado) => {
    const nuevos = [...alumnos];
    nuevos[index].estado = nuevoEstado;
    setAlumnos(nuevos);
  };

  const handleCalificacionChange = (index, nuevaCalificacion) => {
    const nuevos = [...alumnos];
    nuevos[index].calificacion = nuevaCalificacion;
    setAlumnos(nuevos);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const confirmarDatos = async (idUsuario, alumno) => {
    const calificacion = Number(alumno.calificacion);
    console.log (alumno)
    if (alumno.calificacion == '' || alumno.estado == '') {
      alert("Ingresa calificacion y estado del alumno");
      return;
    }

    if (!calificacion || calificacion < 1 || calificacion > 100) {
      alert("Ingresa una calificación entre 1 y 100");
      return;
    }

    const data = {
      Ordinario: mapEstadoParaDB(alumno.estado),
      Calificacion: alumno.calificacion
    };

    try {
      await modificarDatosAlumno(data, idUsuario);
      alert("La información se modificó correctamente");

      const response = await obtenerAlumnosJefe();
      const alumnosConEstado = response.alumnos.map(alumno => ({
        ...alumno,
        estado: mapEstadoDeDB(alumno.Ordinario),
        calificacion: alumno.Calificacion || ''
      }));
      setAlumnos(alumnosConEstado);
      setFiltros({ ...filtros });
    } catch (error) {
      alert("Error al modificar los datos");
      console.log("Error:", error);
    }
  };

  const getEstadoColor = (estado) => {
    if (estado === "ordinario") return "#c8f7c5";
    if (estado === "extraordinario") return "#f7c5c5";
    return "transparent";
  };

  return (
    <div className="page">
      <HeaderJefeDepto />
        <main>
        <section id="titleA">
          <h2>Listado de Alumnos</h2>
        </section> 

        <section className="filtros-container">
          <div className="filtros-centrados">
            <select
              className="filtro-select-alumnos"
              name="estadoCalificacion"
              value={filtros.estadoCalificacion}
              onChange={handleFilterChange}
            >
              <option value="">L / SC</option>
              <option value="calificados">Listos</option>
              <option value="no-calificados">Sin calificar</option>
            </select>

            <select
              className="filtro-select-alumnos"
              name="grado"
              value={filtros.grado}
              onChange={handleFilterChange}
            >
              <option value="">Turno</option>
              <option value="8">8°</option>
              <option value="6">6°</option>
            </select>

            <select
              className="filtro-select-alumnos"
              name="grupo"
              value={filtros.grupo}
              onChange={handleFilterChange}
            >
              <option value="">Grupo</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>

            <select
              className="filtro-select-alumnos"
              name="turno"
              value={filtros.turno}
              onChange={handleFilterChange}
            >
              <option value="">Turno</option>
              <option value="Matutino">Matutino</option>
              <option value="Vespertino">Vespertino</option>
            </select>
          </div>
        </section>
        <div className="contador-total">Total: {totalAlumnos} alumnos
        </div>
        
        <table>
          <thead>
            <tr>
              <th className="col-codigo">Código</th>
              <th className="col-nombre">Nombre completo</th>
              <th className="col-carrera">Carrera</th>
              <th className="col-grado">Grado</th>
              <th className="col-grupo">Grupo</th>
              <th className="col-turno">Turno</th>
              <th className="col-correo">Correo institucional</th>
              <th className="col-calificacion">Calificación</th>
              <th className="col-estado">Estado</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno, index) => (
              <tr key={alumno.Codigo}>
                <td className="col-codigo">{alumno.Codigo}</td>
                <td className="col-nombre">{alumno.NombreCompleto}</td>
                <td className="col-carrera">{alumno.Carrera}</td>
                <td className="col-grado">{alumno.Grado}</td>
                <td className="col-grupo">{alumno.Grupo}</td>
                <td className="col-turno">{alumno.Turno}</td>
                <td className="col-correo">{alumno.CorreoInstitucional}</td>

                {/* CALIFICACIÓN */}
                <td className="col-calificacion">
                  {alumno.Calificacion ? (
                    <span>{alumno.Calificacion}</span>
                  ) : (
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={alumno.calificacion || ''}
                      onChange={(e) => handleCalificacionChange(index, e.target.value)}
                      className="calificacion-input"
                    />
                  )}
                </td>

                {/* ESTADO + CONFIRMAR */}
                <td className="estado-selector">
                  {alumno.Ordinario === 0 || alumno.Ordinario === 1 ? (
                    <span
                      className="estado-etiqueta"
                      style={{ backgroundColor: getEstadoColor(alumno.estado) }}
                    >
                      {alumno.Ordinario === 1 ? "Regular" : "Irregular"}
                    </span>
                  ) : (
                    <>
                      <select
                        className="estado-dropdown"
                        value={alumno.estado || ''}
                        style={{ backgroundColor: getEstadoColor(alumno.estado) }}
                        onChange={(e) => handleEstadoChange(index, e.target.value)}
                      >
                        <option value="">Selecciona estado</option>
                        <option value="ordinario">Regular</option>
                        <option value="extraordinario">Irregular</option>
                      </select>

                      <button
                        className="confirmar-btn"
                        onClick={() => confirmarDatos(alumno.IdUsuario, alumno)}
                        disabled={(alumno.Ordinario === 1 || alumno.Ordinario === 0) || alumno.Calificacion}
                      >
                        Confirmar
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="paginacion">

              
            <button 
              className='button-paginacion'
              onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))}
              disabled={paginaActual === 1}
            >
              Anterior
            </button>

            <label id='label-paginacion'>Página {paginaActual} de {totalPaginas}</label>

            <button 
              className='button-paginacion'
              onClick={() => setPaginaActual(prev => Math.min(prev + 1, totalPaginas))}
              disabled={paginaActual === totalPaginas}
            >
              Siguiente
            </button>
          </div>
      </main>
    </div>
  );
}

export default TablaAlumnos;
