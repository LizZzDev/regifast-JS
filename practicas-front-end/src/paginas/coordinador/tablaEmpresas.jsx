import React, { useEffect, useState } from 'react';
import './ver_empresas.css';

const TablaEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    fetch('/api/empresas')
      .then(res => res.json())
      .then(data => setEmpresas(data))
      .catch(err => console.error('Error al cargar empresas:', err));
  }, []);

  const enviarOpiniones = (idEmpresa, logoEmpresa) => {
    // Simula redirección al formulario de opiniones
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/opiniones'; // o la ruta correspondiente

    const input1 = document.createElement('input');
    input1.type = 'hidden';
    input1.name = 'codigoValidar';
    input1.value = idEmpresa;

    const input2 = document.createElement('input');
    input2.type = 'hidden';
    input2.name = 'LogoEmpresa';
    input2.value = logoEmpresa;

    form.appendChild(input1);
    form.appendChild(input2);

    document.body.appendChild(form);
    form.submit();
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
                  <a href="/empresas/verificadas" className="opcion">Verificadas</a>
                  <a href="/empresas/sin-verificar" className="opcion">Sin verificar</a>
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
                  <td>{empresa.NombreEmpresa}</td>
                  <td>{empresa.Telefono}</td>
                  <td>{empresa.CorreoElectronico}</td>
                  <td>{empresa.RFC}</td>
                  <td>{empresa.DescripcionEmpresa}</td>
                  <td>{empresa.TareasRealizar}</td>
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