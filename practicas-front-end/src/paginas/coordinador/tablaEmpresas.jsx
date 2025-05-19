import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerEmpresas } from '../../api/empresas';
import './validarAlumnos.css';

import HeaderCoordinador from '../../componentes/coordinador/header_coordinador';

const TablaEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [totalEmpresas, setTotalEmpresas] = useState(0);
  const [filtros, setFiltros] = useState({
    busqueda: '',
    revision: '',
    tipoEmpresa: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const cargarEmpresas = async () => {
      try {
        const validada = true;
        const datos = await obtenerEmpresas({ validada });
        setEmpresas(datos.empresas);
      } catch (error) {
        console.error('Error al cargar empresas:', error);
      }
    };

    cargarEmpresas();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({ ...prev, [name]: value }));
  };

  const empresasFiltradas = empresas.filter(emp => {
    const coincideBusqueda =
      emp.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
      emp.rfc.toLowerCase().includes(filtros.busqueda.toLowerCase());

    const coincideRevision =
      filtros.revision === ''
        || (filtros.revision === 'revisado' && emp.revisado)
        || (filtros.revision === 'no-revisado' && !emp.revisado);

    const coincideTipo =
      filtros.tipoEmpresa === ''
        || (filtros.tipoEmpresa === 'ordinaria' && emp.ordinaria)
        || (filtros.tipoEmpresa === 'no-ordinaria' && !emp.ordinaria);

    return coincideBusqueda && coincideRevision && coincideTipo;
  });

  useEffect(() => {
    setTotalEmpresas(empresasFiltradas.length);
  }, [empresasFiltradas]);

  const enviarOpiniones = (idEmpresa, logoEmpresa) => {
    navigate(`/opiniones?idEmpresa=${idEmpresa}&logoEmpresa=${encodeURIComponent(logoEmpresa)}`);
  };

  const handleValidar = (rfc) => {
    // Aquí tu lógica para validar la empresa
    console.log("Validar empresa con RFC:", rfc);
  };

  return (
    <div className="page">
      <HeaderCoordinador />

      <main>
        <section id="titleA">
          <h2>Lista de empresas</h2>
        </section>

        {/* Filtros centrados lado a lado */}
        <section className="filtros">
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

          <select
            className="filtro-select"
            name="tipoEmpresa"
            value={filtros.tipoEmpresa}
            onChange={handleFilterChange}
          >
            <option value="">Todas</option>
            <option value="ordinaria">Ordinarias</option>
            <option value="no-ordinaria">No Ordinarias</option>
          </select>
        </section>

        <div className="contador-total">Total: {totalEmpresas} empresas</div>

        {/* Tabla de empresas */}
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
