import React, { useEffect, useState } from 'react';
import './ver_empresas_sin_verificar.css';

const EmpresasSinVerificar = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    fetch('/api/empresas/no-verificadas') // Cambia según tu ruta real en Express
      .then((res) => res.json())
      .then((data) => setEmpresas(data))
      .catch((error) => console.error('Error al obtener empresas:', error));
  }, []);

  const validarEmpresa = async (empresa) => {
    try {
      const response = await fetch('/api/empresas/validar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rfc: empresa.rfc,
          nombre: empresa.nombre,
          telefono: empresa.telefono,
          descripcion: empresa.descripcion,
          actividades: empresa.actividades,
          vacantes: empresa.vacantes,
          logo: empresa.logo,
          DomicilioFiscal: `${empresa.calle}, ${empresa.numero}, ${empresa.colonia}, ${empresa.municipio}, ${empresa.estado}, CP: ${empresa.codigo_postal}`
        })
      });

      if (response.ok) {
        alert('Empresa validada correctamente.');
        setEmpresas(empresas.filter(e => e.rfc !== empresa.rfc));
      } else {
        alert('Error al validar la empresa.');
      }
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
              <tr>
                <th>Nombre de la empresa</th>
                <th>Teléfono</th>
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
                const domicilio = `${empresa.calle}, ${empresa.numero}, ${empresa.colonia}, ${empresa.municipio}, ${empresa.estado}, CP: ${empresa.codigo_postal}`;
                return (
                  <tr key={empresa.rfc}>
                    <td>{empresa.nombre}</td>
                    <td>{empresa.telefono}</td>
                    <td>{empresa.rfc}</td>
                    <td>{empresa.descripcion}</td>
                    <td>{empresa.actividades}</td>
                    <td>{domicilio}</td>
                    <td>{empresa.vacantes}</td>
                    <td>
                      <button className="validar" onClick={() => validarEmpresa(empresa)}>
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
