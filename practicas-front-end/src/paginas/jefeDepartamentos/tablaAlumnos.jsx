import React, { useEffect, useState } from "react";
import "./ver_alumnos.css";
import { modificarDatosAlumno, obtenerAlumnos } from '../../api/coordinador';
import HeaderJefeDepto from "../../componentes/jefeDepto/header_jefeDepto.jsx";

function TablaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);

  const mapEstadoDeDB = (valor) => {
    if (valor === 1) return "ordinario";
    if (valor === 0) return "extraordinario";
    return "";
  };

  const mapEstadoParaDB = (valor) => {
    if (valor === "ordinario") return 1;
    if (valor === "extraordinario") return 0;
    return null;
  };

  useEffect(() => {
    const cargarAlumnos = async () => {
      try {
        const response = await obtenerAlumnos();
        const alumnosConEstado = response.alumnos.map(alumno => ({
          ...alumno,
          estado: mapEstadoDeDB(alumno.Ordinario),
          calificacion: alumno.Calificacion || ''
        }));
        setAlumnos(alumnosConEstado);
      } catch (error) {
        console.error("Error al obtener alumnos:", error);
      }
    };

    cargarAlumnos();
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

  const confirmarDatos = async (idUsuario, alumno) => {
    const data = {
      Ordinario: mapEstadoParaDB(alumno.estado),
      Calificacion: alumno.calificacion
    };

    try {
      await modificarDatosAlumno(data, idUsuario);
      alert("La información se modificó correctamente");

      const response = await obtenerAlumnos();
      const alumnosConEstado = response.alumnos.map(alumno => ({
        ...alumno,
        estado: mapEstadoDeDB(alumno.Ordinario),
        calificacion: alumno.Calificacion || ''
      }));
      setAlumnos(alumnosConEstado);
    } catch (error) {
      alert("Error al modificar los datos");
      console.log("Error:", error);
    }
  };

  const getEstadoColor = (estado) => {
    if (estado === "ordinario") return "#c8f7c5";
    if (estado === "extraordinario") return "#f7c5c5";
    return "transparent";
  };

  return (
    <div className="page">
      <HeaderJefeDepto />

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
              <tr key={alumno.Codigo}>
                <td>{alumno.Codigo}</td>
                <td>{alumno.NombreCompleto}</td>
                <td>{alumno.Carrera}</td>
                <td>{alumno.Grado}</td>
                <td>{alumno.Grupo}</td>
                <td>{alumno.Turno}</td>
                <td>{alumno.CorreoInstitucional}</td>

                {/* CALIFICACIÓN */}
                <td>
                  {alumno.Calificacion ? (
                    <span>{alumno.Calificacion}</span>
                  ) : (
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={alumno.calificacion || ''}
                      onChange={(e) => handleCalificacionChange(index, e.target.value)}
                      className="calificacion-input"
                    />
                  )}
                </td>

                {/* ESTADO + CONFIRMAR */}
                <td className="estado-selector">
                  {alumno.Ordinario === 0 || alumno.Ordinario === 1 ? (
                    <span
                      className="estado-etiqueta"
                      style={{ backgroundColor: getEstadoColor(alumno.estado) }}
                    >
                      {alumno.Ordinario === 1 ? "Regular" : "Irregular"}
                    </span>
                  ) : (
                    <>
                      <select
                        className="estado-dropdown"
                        value={alumno.estado || ''}
                        style={{ backgroundColor: getEstadoColor(alumno.estado) }}
                        onChange={(e) => handleEstadoChange(index, e.target.value)}
                      >
                        <option value="">Selecciona estado</option>
                        <option value="ordinario">Regular</option>
                        <option value="extraordinario">Irregular</option>
                      </select>

                      <button
                        className="confirmar-btn"
                        onClick={() => confirmarDatos(alumno.IdUsuario, alumno)}
                        disabled={(alumno.Ordinario === 1 || alumno.Ordinario === 0) || alumno.Calificacion}
                      >
                        Confirmar
                      </button>
                    </>
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

export default TablaAlumnos;
