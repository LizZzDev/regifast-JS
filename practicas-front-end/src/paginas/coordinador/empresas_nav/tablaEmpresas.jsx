import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './tabla_empresas.css';
import {validarEmpresa} from '../../../api/coordinador';
import {obtenerEmpresas} from '../../../api/empresas';
import HeaderCoordinador from '../../../componentes/coordinador/header_coordinador';

const TablaEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [validandoIds, setValidandoIds] = useState([]);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalEmpresas, setTotalEmpresas] = useState(0);
  const [filtros, setFiltros] = useState({
    busqueda: '',
    validada: '',
    tipoEmpresa: '',
    practicasExtraordinarias: ''
  });

  const navigate = useNavigate();

  const EditarEmpresa = (idUsuario) => {
      navigate(`editar-empresa/${idUsuario}`);
  };

  const VerEmpresa = (idUsuario) => {
      navigate(`ver-empresa/${idUsuario}`);
  };

 useEffect(() => {
  const cargarEmpresas = async () => {
    try {
      const datos = await obtenerEmpresas({
        pagina: paginaActual,
        limite: 10,
        busqueda: filtros.busqueda || null,
        validada:
          filtros.validada === 'validada' ? 1 :
          filtros.validada === 'no-validada' ? 0 :
          null,
        practicasExtraordinarias:
          filtros.practicasExtraordinarias === 'ordinaria' ? 1 :
          filtros.practicasExtraordinarias === 'interna' ? 0 :
          null
        
      });
      setTotalPaginas(datos.totalPaginas)
      setEmpresas(datos.empresas);
      setTotalEmpresas(datos.total)
    } catch (error) {
      console.error('Error al cargar empresas:', error);
    }
  };

  cargarEmpresas();
}, [filtros, paginaActual]); 

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({ ...prev, [name]: value }));
  };

  const empresasFiltradas = empresas.filter(empresa => {
    const coincideBusqueda =
      empresa.Nombre.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
      empresa.RFC.toLowerCase().includes(filtros.busqueda.toLowerCase());

    const coincideRevision =
      filtros.validada === ''
        || (filtros.validada === 'validada' && empresa.Validada === 1)
        || (filtros.validada === 'no-validada' && empresa.Validada === 0);

    const coincideOrdinario =
      filtros.practicasExtraordinarias === ''
        || (filtros.practicasExtraordinarias === 'ordinaria' && empresa.PracticasExtraordinarias === 1)
        || (filtros.practicasExtraordinarias === 'interna' && empresa.PracticasExtraordinarias === 0);

    return coincideBusqueda && coincideRevision && coincideOrdinario;
  });

  const handleOpiniones = (idEmpresa) => {
      navigate(`ver-calificaciones-empresa/${idEmpresa}`);
  };

  const validarEmpresaConst = async (IdUsuario) => {
    setValidandoIds(prev => [...prev, IdUsuario]);

    try {
      await validarEmpresa(IdUsuario);
      alert("Validación exitosa");

      const datos = await obtenerEmpresas({
        pagina: 1,
        limite: 20,
        busqueda: filtros.busqueda || null,
        validada:
          filtros.validada === 'validada' ? 1 :
          filtros.validada === 'no-validada' ? 0 :
          null,
        practicasExtraordinarias:
          filtros.practicasExtraordinarias === 'ordinaria' ? 1 :
          filtros.practicasExtraordinarias === 'interna' ? 0 :
          null
      });
      setTotalPaginas(datos.totalPaginas)
      setEmpresas(datos.empresas);
      setTotalEmpresas(datos.total)
    } catch (error) {
      alert("Error al validar");
      console.error('Error al enviar datos de validación:', error);
    } finally {
      setValidandoIds(prev => prev.filter(id => id !== IdUsuario));
    }
  };

  return (
    <div className="page">
      <HeaderCoordinador />

      <main>
        <section id="titleA">
          <h2>Lista de empresas</h2>
        </section>

        {/* Filtros */}
        <section className="filtros-container">
          <div className="filtros-centrados">
            <input
              type="text"
              placeholder="Buscar por nombre o RFC"
              id="filtro-input-empresas"
              name="busqueda"
              value={filtros.busqueda}
              onChange={handleFilterChange}
            />

            <select
              className="filtro-select-empresas"
              name="validada"
              value={filtros.validada}
              onChange={handleFilterChange}
            >
              <option value="">Todas las empresas</option>
              <option value="validada">Validadas</option>
              <option value="no-validada">Sin validar</option>
            </select>

            <select
              className="filtro-select-empresas"
              name="practicasExtraordinarias"
              value={filtros.practicasExtraordinarias}
              onChange={handleFilterChange}
            >
              <option value="">Todas las empresas</option>
              <option value="ordinaria">Ordinarias</option>
              <option value="interna">Internas</option>

            </select>               
          </div>
        </section>

        <div className="contador-total">Total: {totalEmpresas} empresas</div>

        {/* Tabla de empresas */}
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>Domicilio</th>
                <th>Opiniones</th>
                <th>Validar</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {empresasFiltradas.map(empresa => (
                  <tr key={empresa.IdEmpresa}>
                  <td>{empresa.Nombre}</td>
                  <td>{empresa.Telefono}</td>
                  <td>{empresa.Correo}</td>
                  <td>{empresa.DomicilioFiscal}</td>
                  <td>
                    <button
                      id="Opiniones"
                      onClick={() => handleOpiniones(empresa.IdEmpresa)}
                    >
                      Opiniones
                    </button>
                 </td>
                 <td>
                    {empresa.Validada === 1 ? (
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        Validado
                      </span>
                    ) : (
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        Sin validar
                      </span>
                    )}
                  </td>
                    <td>
                       <button
                        className="confirmar-btn"
                        onClick={() => EditarEmpresa(empresa.IdEmpresa)}
                      >
                        Editar
                      </button>
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

export default TablaEmpresas;
