import React, { useEffect, useState } from "react";
import "./ver_alumnos.css";

import HeaderJefeDepto from "../../componentes/jefeDepto/header_jefeDepto.jsx";


function TablaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/alumnos")
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

  const handleEstadoChange = (index, nuevoEstado) => {
    const nuevos = [...alumnos];
    nuevos[index].estado = nuevoEstado;
    setAlumnos(nuevos);
  };

  const handleCalificacionChange = (index, nuevaCalificacion) => {
    const nuevos = [...alumnos];
    nuevos[index].calificacion = nuevaCalificacion;
    setAlumnos(nuevos);
  };

  const confirmarDatos = (codigo, estado, calificacion) => {
    fetch("http://localhost:3001/alumnos/actualizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ codigo, estado, calificacion })
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`Datos actualizados:\nEstado: ${estado.toUpperCase()}\nCalificación: ${calificacion}`);
      })
      .catch((err) => {
        console.error("Error al actualizar datos:", err);
      });
  };

  const getEstadoColor = (estado) => {
    return estado === "regular" ? "#c8f7c5" : "#f7c5c5";
  };

  if (loading) return <p>Cargando alumnos...</p>;

  return (
    <div className="page">
      <HeaderJefeDepto/>

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
              <th>Calificación</th>
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

                <td>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={alumno.calificacion || ""}
                    onChange={(e) =>
                      handleCalificacionChange(index, e.target.value)
                    }
                    className="calificacion-input"
                  />
                </td>

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
                    onClick={() =>
                      confirmarDatos(
                        alumno.codigo,
                        alumno.estado,
                        alumno.calificacion || ""
                      )
                    }
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