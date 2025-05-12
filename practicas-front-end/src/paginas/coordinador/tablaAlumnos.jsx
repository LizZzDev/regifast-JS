import React, { useEffect, useState } from "react";
import "./ver_alumnos.css";

function TablaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/alumnos") // Cambia la URL si es necesario
      .then((res) => res.json())
      .then((data) => {
        setAlumnos(data); // Guardar los datos en el estado
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener alumnos:", error);
        setLoading(false);
      });
  }, []);

  const handleEstadoChange = (index, nuevoEstado) => {
    const nuevos = [...alumnos];
    nuevos[index].estado = nuevoEstado;
    setAlumnos(nuevos); // Actualizar el estado en el frontend
  };

  const confirmarEstado = (codigo, estado) => {
    fetch("http://localhost:3001/alumnos/estado", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ codigo, nuevoEstado: estado })
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`Estado actualizado: ${estado.toUpperCase()}`); // Mostrar un mensaje de confirmación
      })
      .catch((err) => {
        console.error("Error al actualizar estado:", err);
      });
  };

  const getEstadoColor = (estado) => {
    return estado === "regular" ? "#c8f7c5" : "#f7c5c5";
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
          <h2>Listado de Alumnos</h2>
        </section>

        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre completo</th>
              <th>Carrera</th>
              <th>Grado</th>
              <th>Grupo</th>
              <th>Turno</th>
              <th>Correo institucional</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno, index) => (
              <tr key={alumno.codigo}>
                <td>{alumno.codigo}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.carrera}</td>
                <td>{alumno.grado}</td>
                <td>{alumno.grupo}</td>
                <td>{alumno.turno}</td>
                <td>{alumno.correo}</td>
                <td className="estado-selector">
                  <select
                    className="estado-dropdown"
                    style={{ backgroundColor: getEstadoColor(alumno.estado) }}
                    value={alumno.estado}
                    onChange={(e) => handleEstadoChange(index, e.target.value)}
                  >
                    <option value="regular">Regular</option>
                    <option value="irregular">Irregular</option>
                  </select>
                  <button
                    className="confirmar-btn"
                    onClick={() => confirmarEstado(alumno.codigo, alumno.estado)}
                  >
                    Confirmar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default TablaAlumnos;