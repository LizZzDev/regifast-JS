import React, { useEffect, useState } from "react";
import "./ver_alumnos_al_validar.css";

function ValidacionAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/alumnos-proceso") // Ajusta según tu API real
      .then((res) => res.json())
      .then((data) => {
        setAlumnos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener alumnos:", error);
        setLoading(false);
      });
  }, []);

  const validarDatos = (codigo) => {
    const confirmacion = window.confirm("¿Estás seguro de validar tus datos?");
    if (!confirmacion) return;

    fetch("http://localhost:3001/validar-datos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ codigo }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Tus datos han sido validados correctamente.");
        setAlumnos((prev) =>
          prev.map((a) =>
            a.codigo === codigo ? { ...a, etapa: "Validado" } : a
          )
        );
      })
      .catch((err) => {
        console.error("Error al validar:", err);
        alert("Hubo un error al validar tus datos.");
      });
  };

  if (loading) return <p>Cargando alumnos...</p>;

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
                      onClick={() => validarDatos(alumno.codigo)}
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
