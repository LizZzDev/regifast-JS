import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ver_empresas.css';
import {validarEmpresa} from '../../../api/coordinador';
import {obtenerEmpresas} from '../../../api/empresas';
import HeaderCoordinador from '../../../componentes/coordinador/header_coordinador';

const TablaEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [validandoIds, setValidandoIds] = useState([]);
  const [totalEmpresas, setTotalEmpresas] = useState(0);
  const [filtros, setFiltros] = useState({
    busqueda: '',
    validada: '',
    tipoEmpresa: '',
    editable: '',
    ordinaria: ''
  });

  const navigate = useNavigate();

  const handleEmpresa = (idUsuario) => {
      navigate(`editar-empresa/${idUsuario}`);
  };

 useEffect(() => {
  const cargarEmpresas = async () => {
    try {
      const datos = await obtenerEmpresas({
        pagina: 1,
        limite: 1000,
        busqueda: filtros.busqueda || null,
        validada:
          filtros.validada === 'validada' ? 1 :
          filtros.validada === 'no-validada' ? 0 :
          null
      });
      setEmpresas(datos.empresas);
    } catch (error) {
      console.error('Error al cargar empresas:', error);
    }
  };

  cargarEmpresas();
}, [filtros.busqueda, filtros.validada]); 

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
      filtros.ordinaria === ''
        || (filtros.ordinaria === 'ordinaria' && empresa.PracticasExtraordinarias === 1)
        || (filtros.ordinaria === 'interna' && empresa.PracticasExtraordinarias === 0);

   const coincideEditable =
      filtros.editable === ''
        || (filtros.editable === 'editable' && empresa.IdUsuario === null)

    return coincideBusqueda && coincideRevision && coincideOrdinario && coincideEditable;
  });

  useEffect(() => {
    setTotalEmpresas(empresasFiltradas.length);
  }, [empresasFiltradas]);

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
        limite: 1000,
        busqueda: filtros.busqueda || null,
        validada:
          filtros.validada === 'validada' ? 1 :
          filtros.validada === 'no-validada' ? 0 :
          null
      });
      setEmpresas(datos.empresas);
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
              name="ordinaria"
              value={filtros.ordinaria}
              onChange={handleFilterChange}
            >
              <option value="">Todas las empresas</option>
              <option value="ordinaria">Ordinarias</option>
              <option value="interna">Internas</option>

            </select>             

            <select
              className="filtro-select-empresas"
              name="editable"
              value={filtros.editable}
              onChange={handleFilterChange}
            >
              <option value="">Todas las empresas</option>
              <option value="editable">Editable</option>
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
                <th>RFC</th>
                <th>Descripción</th>
                <th>Actividades</th>
                <th>Domicilio</th>
                <th>Vacantes</th>
                <th>Opiniones</th>
                <th>Validar</th>
                {filtros.editable === 'editable' && <th>Editar</th>}
              </tr>
            </thead>
            <tbody>
              {empresasFiltradas.map(empresa => (
                  <tr key={empresa.IdEmpresa}>
                  <td>{empresa.Nombre}</td>
                  <td>{empresa.Telefono}</td>
                  <td>{empresa.Correo}</td>
                  <td>{empresa.RFC}</td>
                  <td>{empresa.Descripcion}</td>
                  <td>{empresa.Actividades}</td>
                  <td>{empresa.DomicilioFiscal}</td>
                  <td>{empresa.Vacantes}</td>
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
                      <button
                        className="confirmar-btn"
                        onClick={() => validarEmpresaConst(empresa.IdUsuario)}
                        disabled={validandoIds.includes(empresa.IdUsuario)}
                      >
                        {validandoIds.includes(empresa.IdUsuario) ? 'Validando...' : 'Validar'}
                      </button>
                    )}
                  </td>
                  {filtros.editable === 'editable' && empresa.IdUsuario === null ?  (
                       <button
                        className="confirmar-btn"
                        onClick={() => handleEmpresa(empresa.IdEmpresa)}
                      >
                        Editar
                      </button>
                  ) : null
                  }
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
