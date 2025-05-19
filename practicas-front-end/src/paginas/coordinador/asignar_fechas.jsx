import React, { useEffect, useState } from 'react';
import './asignarFechas.css';

import HeaderCoordinador from '../../componentes/coordinador/header_coordinador';


const AsignarFechas = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [fechasPorRango, setFechasPorRango] = useState({
    1: { fechaInicio: '', fechaFin: '' },
    2: { fechaInicio: '', fechaFin: '' },
    3: { fechaInicio: '', fechaFin: '' },
    4: { fechaInicio: '', fechaFin: '' }
  });

  const [rangos] = useState([
    { idRango: 1, texto: "100-91" },
    { idRango: 2, texto: "90-81" },
    { idRango: 3, texto: "80-71" },
    { idRango: 4, texto: "70-60" }
  ]);

  useEffect(() => {
    fetch('http://localhost:3001/alumnos') 
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
    <div>
      <HeaderCoordinador/>

      <main>
        <h2>Asignar Fechas por Calificación</h2>
        
        {/* Tabla de Rangos */}
        <h3>Configurar Fechas por Rango</h3>
        <table>
          <thead>
            <tr>
              <th>Rango</th>
              <th>Fecha Inicio</th>
              <th>Fecha Fin</th>
              <th>Confirmar</th>
            </tr>
          </thead>
          <tbody>
            {rangos.map(rango => (
              <tr key={rango.idRango}>
                <td>{rango.texto}</td>
                <td>
                  <input 
                    type="date" 
                    className="fecha-inicio" 
                    value={fechasPorRango[rango.idRango]?.fechaInicio || ''}
                    onChange={(e) => handleFechaChange(rango.idRango, 'fechaInicio', e.target.value)}
                  />
                </td>
                <td>
                  <input 
                    type="date" 
                    className="fecha-fin" 
                    value={fechasPorRango[rango.idRango]?.fechaFin || ''}
                    onChange={(e) => handleFechaChange(rango.idRango, 'fechaFin', e.target.value)}
                  />
                </td>
                <td>
                  <button 
                    className="confirmar-btn"
                    onClick={() => {
                      const alumnosEnRango = alumnos.filter(alumno => getRangoId(alumno.calificacion) === rango.idRango);
                      if (alumnosEnRango.length > 0) {
                        alumnosEnRango.forEach(alumno => handleSubmitIndividual(alumno));
                      } else {
                        alert(`No hay alumnos en el rango ${rango.texto}`);
                      }
                    }}
                  >
                    Confirmar para todo el rango
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Tabla de Alumnos */}
        <h3>Asignación Individual</h3>
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
                      value={fechas.fechaInicio || ''}
                      onChange={(e) => handleFechaChange(idRango, 'fechaInicio', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={fechas.fechaFin || ''}
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
    </div>
  );
};

export default AsignarFechas;