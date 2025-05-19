import React, { useState, useEffect } from 'react';
import './validarAlumnos.css';
import { validarAlumno, obtenerAlumnos } from '../../api/coordinador';

import HeaderCoordinador from '../../componentes/coordinador/header_coordinador';

const ValidacionAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [validandoIds, setValidandoIds] = useState([]);

  // Estados para los filtros
  const [filtros, setFiltros] = useState({
    busqueda: '',
    carrera: '',
    revision: ''
  });
  
  const [alumnosFiltrados, setAlumnosFiltrados] = useState([]);
  const [totalAlumnos, setTotalAlumnos] = useState(0);

  useEffect(() => {
    const cargarAlumnos = async () => {
      try {
       const response = await obtenerAlumnos({
          pagina: 1,
          limite: 1000, // si quieres traer muchos para filtrar
          carrera: filtros.carrera || null,
          busqueda: filtros.busqueda || null,
          validada:
            filtros.revision === 'revisado' ? 1 :
            filtros.revision === 'no-revisado' ? 0 :
            null
        });
        console.log (response.alumnos)
        setAlumnos(response.alumnos);
      } catch (error) {
        console.error("Error al obtener alumnos:", error);
      }
    };

    cargarAlumnos();
  }, [filtros]);

  // Aplicar filtros cuando cambien los filtros o la lista de alumnos
  useEffect(() => {
    const filtered = alumnos.filter(alumno => {
      const coincideBusqueda = 
        alumno.NombreCompleto.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        alumno.Codigo.toLowerCase().includes(filtros.busqueda.toLowerCase());
      
      const coincideCarrera = 
        !filtros.carrera || alumno.Carrera === filtros.carrera;
      
      const coincideRevision =
        !filtros.revision ||
        (filtros.revision === "revisado" && alumno.Revision === 1) ||
        (filtros.revision === "no-revisado" && alumno.Revision === 0);

      return coincideBusqueda && coincideCarrera && coincideRevision;
    });

    setAlumnosFiltrados(filtered);
    setTotalAlumnos(filtered.length);
}, [filtros, alumnos]);


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validarAlumnoConst = async (IdUsuario) => {
  setValidandoIds(prev => [...prev, IdUsuario]);

    try {
      await validarAlumno(IdUsuario);
      alert("Validacion exitosa");
      const response = await obtenerAlumnos({
      pagina: 1,
      limite: 1000,
      carrera: filtros.carrera || null,
      busqueda: filtros.busqueda || null,
      validada:
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
              placeholder="Buscar por nombre o código"
              className="filtro-input"
              name="busqueda"
              value={filtros.busqueda}
              onChange={handleFilterChange}
            />

            <select
              className="filtro-select"
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
              className="filtro-select"
              name="revision"
              value={filtros.revision}
              onChange={handleFilterChange}
            >
              <option value="">Todos</option>
              <option value="revisado">Validados</option>
              <option value="no-revisado">No Validados</option>
            </select>
          </div>

          <div className="contador-total">Total: {totalAlumnos} alumnos</div>
        </section>

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
                <tr key={alumno.Codigo}>
                  <td>{alumno.Codigo}</td>
                  <td>{alumno.NombreCompleto}</td>
                  <td>{alumno.Carrera}</td>
                  <td>{alumno.CorreoInstitucional}</td>
                  <td>{alumno.BarraStatus}</td>
                  <td>
                    {alumno.Revision === 1 ? (
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        Validado
                      </span>
                    ) : (
                      <button
                        className="confirmar-btn"
                        onClick={() => validarAlumnoConst(alumno.IdUsuario)}
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
      </main>
    </div>
  );
};

export default ValidacionAlumnos;