import React, { useState } from 'react';
import './asignarFechas.css';
import { asignarFechaIngresoPorCalificacion } from '../../api/coordinador';

const AsignarFechas = () => {
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

  const handleFechaChange = (idRango, campo, valor) => {
  setFechasPorRango(prev => ({
    ...prev,
    [idRango]: { ...prev[idRango], [campo]: valor }
  }));
};

  const handleSubmitRango = async (idRango) => {
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
      }]
    };

    try {
      await asignarFechaIngresoPorCalificacion(payload);
      alert(`Fechas asignadas correctamente para el rango ${idRango}`);
    } catch (error) {
      console.error("Error al asignar fechas:", error);
      alert("Ocurrió un error al asignar fechas");
    }
  };

  return (
    <div>
      <header>
        <article id="nomUDG">
          <img src="/img/udg_white.png" alt="Logo UDG" />
        </article>
        <nav className="menu">
        <ul>
           <li><a href="principal">INICIO</a></li>
          <li><a href="alumnos">ALUMNOS</a></li>
          <li><a href="empresas">EMPRESAS</a></li>
          <li><a href="fechas">FECHAS</a></li>
          <li><a href="#">OPCIONES</a></li>
        </ul>
      </nav>
      </header>

      <main>
      <h2>Asignar Fechas por Calificación</h2>

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
                  onClick={() => handleSubmitRango(rango.idRango)}
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
};

export default AsignarFechas;