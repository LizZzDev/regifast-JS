import React, { useState, useEffect } from 'react';
import './validarAlumnos.css';
import { validarAlumno, obtenerAlumnos } from '../../../api/coordinador';
import { useNavigate } from 'react-router-dom';

import HeaderCoordinador from '../../../componentes/coordinador/header_coordinador';

const ValidacionAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [validandoIds, setValidandoIds] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
    
  // Estados para los filtros
  const [filtros, setFiltros] = useState({
    busqueda: '',
    carrera: '',
    revision: '',
    ordinario: ''
  });
  
  const [alumnosFiltrados, setAlumnosFiltrados] = useState([]);
  const [totalAlumnos, setTotalAlumnos] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarAlumnos = async () => {
      console.log (filtros.ordinario)
      try {
       const response = await obtenerAlumnos({
          pagina: paginaActual,
          limite: 10,
          carrera: filtros.carrera || null,
          busqueda: filtros.busqueda || null,
          ordinario: filtros.ordinario === 'ordinario' ? 1 :
           filtros.ordinario === 'no-ordinario' ? 0 :
           null,
          validado:
            filtros.revision === 'revisado' ? 1 :
            filtros.revision === 'no-revisado' ? 0 :
            null
        });
        console.log ("a", filtros, "a", response);
        const paginas = response.totalPaginas;
        setTotalPaginas(paginas < 1 ? 1 : paginas);
        setTotalAlumnos(response.total)
        setAlumnos(response.alumnos);
      } catch (error) {
        console.error("Error al obtener alumnos:", error);
      }
    };

    cargarAlumnos();
  }, [filtros, paginaActual]);

  // Aplicar filtros cuando cambien los filtros o la lista de alumnos
  useEffect(() => {
    const filtered = alumnos.filter(alumno => {
      const coincideBusqueda = 
        alumno.NombreCompleto.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        alumno.Codigo.includes(filtros.busqueda);
      
      const coincideCarrera = 
        !filtros.carrera || alumno.Carrera === filtros.carrera;
      
      const coincideRevision =
        !filtros.revision ||
        (filtros.revision === "revisado" && alumno.Revision === 1) ||
        (filtros.revision === "no-revisado" && alumno.Revision === 0);

      const coincideOrdinario =
        !filtros.ordinario ||
        (filtros.ordinario === "ordinario" && alumno.Ordinario === 1) ||
        (filtros.ordinario === "no-ordinario" && alumno.Ordinario === 0);

      return coincideBusqueda && coincideCarrera && coincideRevision && coincideOrdinario;
    });

    setAlumnosFiltrados(filtered);
}, [filtros, alumnos]);


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAlumno = (idAlumno) => {
      navigate(`editar-alumno/${idAlumno}`);
  };

  const validarAlumnoConst = async (IdUsuario) => {
  setValidandoIds(prev => [...prev, IdUsuario]);

    try {
      await validarAlumno(IdUsuario);
      alert("Validacion exitosa");
      const response = await obtenerAlumnos({
          pagina: paginaActual,
          limite: 10,
          carrera: filtros.carrera || null,
          busqueda: filtros.busqueda || null,
          ordinario: filtros.ordinario === 'ordinario' ? 1 :
           filtros.ordinario === 'no-ordinario' ? 0 :
           null,
          validado:
            filtros.revision === 'revisado' ? 1 :
            filtros.revision === 'no-revisado' ? 0 :
            null
        });
    setAlumnos(response.alumnos);
    } catch (error) {
      console.error('Error al enviar datos de validación:', error);
    } finally {
      setValidandoIds(prev => prev.filter(id => id !== IdUsuario));
  }
  };

  return (
    <div className="page">
      <HeaderCoordinador/>

      <main>
        <section id="titleA">
          <h2>Validación de Datos de Alumnos</h2>
        </section>

        {/* Filtros */}
        <section className="filtros-container">
          <div className="filtros-centrados">
            <input
              type="text"
              placeholder="Buscar por código"
              id="filtro-input-alumnos"
              name="busqueda"
              value={filtros.busqueda}
              onChange={handleFilterChange}
            />

            <select
              class="filtro-select-alumnos"
              name="carrera"
              value={filtros.carrera}
              onChange={handleFilterChange}
            >
              <option value="">Todas las carreras</option>
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

            <select
              class="filtro-select-alumnos"
              name="revision"
              value={filtros.revision}
              onChange={handleFilterChange}
            >
              <option value="">Todos los alumnos</option>
              <option value="revisado">Validados</option>
              <option value="no-revisado">No Validados</option>
            </select>

               <select
              class="filtro-select-alumnos"
              name="ordinario"
              value={filtros.ordinario}
              onChange={handleFilterChange}
            >
              <option value="">Todos los alumnos</option>
              <option value="ordinario">Ordinarios</option>
              <option value="no-ordinario">No ordinarios</option>
            </select>
          </div>
        </section>
        <div className="contador-total">Total: {totalAlumnos} alumnos
          <p id='avisoCoordinador'>NOTA: Puede ingresar al alumno clickeando alguna celda con sus datos</p>
        </div>

        {/* Tabla de alumnos */}
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Carrera</th>
                <th>Correo Institucional</th>
                <th>Etapa del proceso</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {alumnosFiltrados.map((alumno) => (
                <tr key={alumno.Codigo}
                    onClick={() => handleAlumno(alumno.IdUsuario)}

                >
                  <td id="tdUno">{alumno.Codigo}</td>
                  <td id="tdDos">{alumno.NombreCompleto}</td>
                  <td id="tdTres">{alumno.Carrera}</td>
                  <td id="tdCuatro">{alumno.CorreoInstitucional}</td>
                  <td id="tdCinco">{alumno.BarraStatus}</td>
                  <td id="tdSeis">
                    {alumno.Revision === 1 ? (
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        Validado
                      </span>
                    ) : (
                      <button
                        className="confirmar-btn"
                       onClick={(e) => {
                          e.stopPropagation();
                          validarAlumnoConst(alumno.IdUsuario);
                        }}
                        disabled={validandoIds.includes(alumno.IdUsuario)}

                      >
                        {validandoIds.includes(alumno.IdUsuario) ? 'Validando...' : 'Validar'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
};

export default ValidacionAlumnos;