import React, { useEffect, useState } from "react";
import "./ver_alumnos_validar.css";
import { validarAlumno, obtenerAlumnos } from '../../api/coordinador';
 

function ValidacionAlumnos() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const cargarEmpresas = async () => {
      try {
        const datos = await obtenerAlumnos();
        setAlumnos(datos.empresas);
      } catch (error) {
        console.error('Error al cargar empresas:', error);
      }
    };

    cargarEmpresas();
  }, []); 

  const validarAlumnoConst = async (idEmpresa) => {
    try {
        await validarAlumno(idEmpresa);
    
        const datos = await obtenerAlumnos();
        setAlumnos(datos.empresas);
    } catch (error) {
      console.error('Error al enviar datos de validación:', error);
    }
  };

  return (
    <div className="page">
      <header>
        <section id="nomUDG">
          <img src="img/Logo_UDG_horiz_blanco-01.svg" alt="Logo UDG" />
        </section>
        <nav className="menu">
          <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="#">ALUMNOS</a></li>
            <li><a href="#">CERRAR SESIÓN</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="titleA">
          <h2>Validación de Datos de Alumnos</h2>
        </section>

        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Carrera</th>
              <th>Correo Institucional</th>
              <th>Etapa</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.codigo}>
                <td>{alumno.codigo}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.carrera}</td>
                <td>{alumno.correo}</td>
                <td>{alumno.etapa}</td>
                <td>
                  {alumno.etapa === "Validado" ? (
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      Validado
                    </span>
                  ) : (
                    <button
                      className="confirmar-btn"
                      onClick={() => validarAlumnoConst(alumno.codigo)}
                    >
                      Validar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default ValidacionAlumnos;
