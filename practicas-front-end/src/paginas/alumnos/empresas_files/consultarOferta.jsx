import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './consultarOferta.css';
import Header from "../../../componentes/alumnos/header.jsx";
import { obtenerEmpresasParaUsuario, postularOfertaEmpresa } from '../../../api/alumnos/index.js';

const ConsultarOferta = () => {
    const [empresas, setEmpresas] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const navigate = useNavigate();
  
   useEffect(() => {
    const cargarEmpresas = async () => {
      try {
        const validada = true;
        const vacantes = true;
        const datos = await obtenerEmpresasParaUsuario({ 
          pagina: paginaActual, 
          limite: 10, 
          validada, 
          vacantes 
        });
        setEmpresas(datos.empresas);
        setTotalPaginas(datos.totalPaginas);
      } catch (error) {
        console.error('Error al cargar empresas:', error);
      }
    };

    cargarEmpresas();
  }, [paginaActual]);

  const handleOpiniones = (idEmpresa) => {
      navigate(`ver-calificaciones-empresa/${idEmpresa}`);
  };

  const handlePostular = async (idEmpresa) => {
     if (window.confirm('¿Estás seguro de querer seleccionar esta empresa? Una vez hecho esto de ninguna manera es reversible.')) {
        try {
          await postularOfertaEmpresa(idEmpresa);

            navigate('/alumno/principal');
        } catch (error) {
            alert(error.message);
        }
    };
};

  return (
    <div className="montserrat">
      <Header/>

      <main>
        <section id="sectionTabla">
          <table className="montserratChiquita">
            <thead>
              <tr>
                <th>Nombre de la empresa</th>
                <th>Descripción</th>
                <th>Actividades</th>
                <th>Domicilio</th>
                <th>Vacantes</th>
                <th>Opiniones</th>
                <th>Seleccionar empresa</th>
              </tr>
            </thead>
            <tbody>
              {empresas.map(empresa => (
              <tr>
                <td>{empresa.Nombre}</td>
                <td>{empresa.Descripcion}</td>
                <td>{empresa.Actividades}</td>
                <td>{empresa.DomicilioFiscal}</td>
                <td>{empresa.Vacantes}</td>
                <td>
                  <button onClick={() => handleOpiniones(empresa.IdEmpresa)} className="form-button">
                    Opiniones
                  </button>
                </td>
                <td>
                  <button onClick={() => handlePostular(empresa.IdEmpresa)} className="form-button">
                    Postular
                  </button>
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

        </section>
      </main>
    </div>
  );
};

export default ConsultarOferta;