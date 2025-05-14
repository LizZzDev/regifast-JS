import React, { useEffect, useState } from 'react';
import './asignarFechas.css';

const AsignarFechas = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [fechasPorRango, setFechasPorRango] = useState({
    1: { fechaInicio: '', fechaFin: '' },
    2: { fechaInicio: '', fechaFin: '' },
    3: { fechaInicio: '', fechaFin: '' },
    4: { fechaInicio: '', fechaFin: '' }
  });

  useEffect(() => {
    fetch('http://localhost:3001/alumnos') // Ajustar el endpoint (backedn)
      .then(res => res.json())
      .then(data => setAlumnos(data))
      .catch(err => console.error('Error al cargar alumnos:', err));
  }, []);

  const getRangoId = (calificacion) => {
    if (calificacion >= 90) return 1;
    if (calificacion >= 80) return 2;
    if (calificacion >= 70) return 3;
    if (calificacion >= 60) return 4;
    return null;
  };

  const handleFechaChange = (idRango, campo, valor) => {
    setFechasPorRango(prev => ({
      ...prev,
      [idRango]: { ...prev[idRango], [campo]: valor }
    }));
  };

  const handleSubmitIndividual = (alumno) => {
    const idRango = getRangoId(alumno.calificacion);
    const fechas = fechasPorRango[idRango];

    if (!fechas || !fechas.fechaInicio || !fechas.fechaFin) {
      alert('Selecciona ambas fechas para este rango');
      return;
    }

    const payload = {
      rangos: [{
        idRango,
        fechaInicio: fechas.fechaInicio,
        fechaFin: fechas.fechaFin
      }],
      alumno: {
        codigo: alumno.codigo
      }
    };

    fetch('http://localhost:3001/asignar-fechas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert(`Fechas asignadas al alumno ${alumno.nombre}`);
        } else {
          alert('Error al asignar fechas');
        }
      })
      .catch(err => console.error('Error en el envío:', err));
  };

  return (
    <main>
      <h2>Asignar Fechas por Calificación</h2>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Correo Institucional</th>
            <th>Calificación</th>
            <th>Rango</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Confirmar</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => {
            const idRango = getRangoId(alumno.calificacion);
            const fechas = fechasPorRango[idRango] || {};

            return (
              <tr key={alumno.codigo}>
                <td>{alumno.codigo}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.carrera}</td>
                <td>{alumno.correo}</td>
                <td>{alumno.calificacion}</td>
                <td>{idRango ? `Rango ${idRango}` : 'N/A'}</td>
                <td>
                  <input
                    type="date"
                    value={fechas.fechaInicio}
                    onChange={(e) => handleFechaChange(idRango, 'fechaInicio', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={fechas.fechaFin}
                    onChange={(e) => handleFechaChange(idRango, 'fechaFin', e.target.value)}
                  />
                </td>
                <td>
                  <button
                    className="confirmar-btn"
                    onClick={() => handleSubmitIndividual(alumno)}
                  >
                    Confirmar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default AsignarFechas;