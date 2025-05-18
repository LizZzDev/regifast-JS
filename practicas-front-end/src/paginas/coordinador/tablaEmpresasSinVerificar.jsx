import React, { useEffect, useState } from 'react';
import './ver_empresas_sin_verificar.css';
import Header from "../../componentes/header.jsx";
import { obtenerEmpresas } from '../../api/empresas';
import { validarEmpresa } from '../../api/coordinador';

const EmpresasSinVerificar = () => {  
   const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const cargarEmpresas = async () => {
      try {
        const validada = false;
        const datos = await obtenerEmpresas({validada});
        setEmpresas(datos.empresas);
      } catch (error) {
        console.error('Error al cargar empresas:', error);
      }
    };

    cargarEmpresas();
  }, []); 

  const validarEmpresaConst = async (idEmpresa) => {
    try {
        await validarEmpresa(idEmpresa);
        
        const validada = false;
        const datos = await obtenerEmpresas({ validada });
        setEmpresas(datos.empresas);
    } catch (error) {
      console.error('Error al enviar datos de validación:', error);
    }
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
            <li><section id="navegacion1"><a href="/alumnos" id="datalist">ALUMNOS</a></section></li>
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
              <tr>
                <th>Nombre de la empresa</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>RFC</th>
                <th>Descripción</th>
                <th>Actividades</th>
                <th>Domicilio</th>
                <th>Vacantes</th>
                <th>Validar</th>
              </tr>
            </thead>
            <tbody>
              {empresas.map((empresa) => {
                return (
                  <tr key={empresa.RFC}>
                     <td>{empresa.Nombre}</td>
                    <td>{empresa.Telefono}</td>
                    <td>{empresa.Correo}</td>
                    <td>{empresa.RFC}</td>
                    <td>{empresa.Descripcion}</td>
                    <td>{empresa.Actividades}</td>
                    <td>{empresa.DomicilioFiscal}</td>
                    <td>{empresa.Vacantes}</td>
                    <td>
                      <button className="validar" onClick={() => validarEmpresaConst(empresa.IdUsuario)}>
                        Validar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default EmpresasSinVerificar;
