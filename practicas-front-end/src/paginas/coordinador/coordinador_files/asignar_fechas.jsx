import React, { useState, useEffect } from 'react';
import './asignarFechas.css';
import HeaderCoordinador from '../../../componentes/coordinador/header_coordinador';
import { asignarFechaIngresoPorCalificacion, obtenerFechasParaPostularseEmpresas } from '../../../api/coordinador';


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

  const [fechas, setFechas] = useState([]);


   useEffect(() => {
      const obtenerFechas = async () => {
        try {
          const response = await obtenerFechasParaPostularseEmpresas();
                  console.log (response)
  
          setFechas(response);
        } catch (error) {
          alert("No se pudo obtener el alumno", error.response.data.message);
        }
      };
      obtenerFechas();
  }, []); 
  

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

    const formatearFecha = (fechaISO) => {
    return fechaISO ? fechaISO.slice(0, 10) : "";
  };

  return (
    <div>
      <HeaderCoordinador/>

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
            <th>Fecha de inicio</th>
            <th>Fecha de fin</th>
          </tr>
        </thead>
        <tbody>
           {rangos.map(rango => {
              const fechaAsignada = fechas.find(f => f.IdRango === rango.idRango);

              return (
                <tr key={rango.idRango}>
                  <td>{rango.texto}</td>
                  <td>
                    <input 
                      type="date" 
                      value={fechasPorRango[rango.idRango]?.fechaInicio || ''}
                      onChange={(e) => handleFechaChange(rango.idRango, 'fechaInicio', e.target.value)}
                    />
                  </td>
                  <td>
                    <input 
                      type="date" 
                      value={fechasPorRango[rango.idRango]?.fechaFin || ''}
                      onChange={(e) => handleFechaChange(rango.idRango, 'fechaFin', e.target.value)}
                    />
                  </td>
                  <td>
                    <button id="confirmarBotonFecha" onClick={() => handleSubmitRango(rango.idRango)}>
                      Confirmar
                    </button>
                  </td>
                  <td>
                    {fechaAsignada ? formatearFecha(fechaAsignada.FechaInicio) : "—"}
                  </td>
                  <td>
                    {fechaAsignada ? formatearFecha(fechaAsignada.FechaFin) : "—"}
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