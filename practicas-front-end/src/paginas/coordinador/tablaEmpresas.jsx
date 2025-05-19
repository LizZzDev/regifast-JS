import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- IMPORTANTE
import { obtenerEmpresas } from '../../api/empresas';
import './validarAlumnos.css';
import Header from "../../componentes/header.jsx";

const TablaEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const cargarEmpresas = async () => {
      try {
        const validada = true;
        const datos = await obtenerEmpresas({validada});
        setEmpresas(datos.empresas);
      } catch (error) {
        console.error('Error al cargar empresas:', error);
      }
    };

    cargarEmpresas();
  }, []);

  const enviarOpiniones = (idEmpresa, logoEmpresa) => {
    navigate(`/opiniones?idEmpresa=${idEmpresa}&logoEmpresa=${encodeURIComponent(logoEmpresa)}`);
  };

  return (
    <div className="page">
      <header>
        <section id="nomUDG">
          <img src="img/Logo_UDG_horiz_blanco-01.svg" alt="Logo UDG" />
        </section>
      </header>

      <nav className="menu">
        <ul>
           <li><a href="principal">INICIO</a></li>
          <li><a href="alumnos">ALUMNOS</a></li>
          <li><a href="empresas">EMPRESAS</a></li>
          <li><a href="fechas">FECHAS</a></li>
          <li><a href="#">OPCIONES</a></li>
        </ul>
      </nav>

      <main>
        <section id="titleA">
          <h2>Lista de empresas</h2>
        </section>

        {/* Filters */}
        <section className="filtros-container">
          <div className="filtros-centrados">
            <input
              type="text"
              placeholder="Buscar por nombre o RFC"
              className="filtro-input"
              name="busqueda"
              value={filtros.busqueda}
              onChange={handleFilterChange}
            />

            <select
              className="filtro-select"
              name="revision"
              value={filtros.revision}
              onChange={handleFilterChange}
            >
              <option value="">Todas</option>
              <option value="revisado">Revisadas</option>
              <option value="no-revisado">No Revisadas</option>
            </select>
          </div>

          <div className="contador-total">Total: {totalEmpresas} empresas</div>
        </section>

        {/* Companies table */}
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>RFC</th>
                <th>Nombre de la empresa</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Etapa del proceso</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {empresasFiltradas.map(empresa => (
                <tr key={empresa.rfc}>
                  <td>{empresa.rfc}</td>
                  <td>{empresa.nombre}</td>
                  <td>{empresa.correo}</td>
                  <td>{empresa.telefono}</td>
                  <td>{empresa.etapa}</td>
                  <td>
                    <button 
                      className="confirmar-btn" 
                      onClick={() => handleValidar(empresa.rfc)}
                      disabled={empresa.etapa !== 'Revisión'}
                    >
                      {empresa.etapa === 'Revisión' ? 'Validar' : 'Validada'}
                    </button>
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

export default TablaEmpresas;