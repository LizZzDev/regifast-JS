import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- IMPORTANTE
import { obtenerEmpresas } from '../../api/empresas';
import './ver_empresas.css';

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
  }, []); // <--- TE FALTABA ESTE CORCHETE CERRANDO EL useEffect

  const enviarOpiniones = (idEmpresa, logoEmpresa) => {
    navigate(`/opiniones?idEmpresa=${idEmpresa}&logoEmpresa=${encodeURIComponent(logoEmpresa)}`);
  };

  return (
    <div className="montserrat">
      <header>
        <section id="nomUDG">
          <img src="/img/Logo_UDG_horiz_blanco-01.svg" alt="Logo UDG" />
        </section>
        <nav className="menu">
          <ul>
            <li><a href="/inicio">INICIO</a></li>
            <li>
              <section id="navegacion1">
                <a href="/alumnos" id="datalist">ALUMNOS</a>
              </section>
            </li>
            <li>
              <section id="navegacion2">
                <a href="#">EMPRESAS</a>
                <div className="submenu2">
                  <a href="/coordinador/verificadas" className="opcion">Verificadas</a>
                  <a href="/coordinador/sin-verificar" className="opcion">Sin verificar</a>
                </div>
              </section>
            </li>
            <li>
              <section id="navegacion2">
                <a href="#">OPCIONES</a>
                <div className="submenu2">
                  <a href="/admin/nuevo" className="opcion">Crear nuevo admin</a>
                  <a href="/departamento/nuevo" className="opcion">Crear jefe de departamento</a>
                  <a href="/logout" className="opcion">Cerrar sesión</a>
                </div>
              </section>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="tabla">
          <table className="montserrat em2">
            <thead>
              <tr id="color">
                <th>Nombre de la empresa</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>RFC</th>
                <th>Descripción</th>
                <th>Actividades</th>
                <th>Domicilio</th>
                <th>Vacantes</th>
                <th>Opiniones</th>
              </tr>
            </thead>
            <tbody>
              {empresas.map(empresa => (
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
                      onClick={() => enviarOpiniones(empresa.IdEmpresa, empresa.LogoEmpresa)}
                    >
                      Opiniones
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default TablaEmpresas;