import React, { useState, useEffect, useRef } from 'react';
// import { Chart } from 'chart.js/auto';
import './grafica.css';

import HeaderCoordinador from '../../componentes/coordinador/header_coordinador';


const Estadisticas = () => {
  // Datos de ejemplo por carrera
  const datosPorCarrera = {
    todas: { grafica: [1200, 800, 1500, 500], revisados: 1800, noRevisados: 700 },
    TPSI: { grafica: [500, 200, 600, 100], revisados: 1000, noRevisados: 200 },
    TPAL: { grafica: [300, 200, 300, 100], revisados: 600, noRevisados: 100 },
    TPEI: { grafica: [200, 300, 400, 100], revisados: 500, noRevisados: 200 },
    TPPQ: { grafica: [100, 100, 200, 0], revisados: 200, noRevisados: 100 },
    TPMF: { grafica: [100, 100, 100, 0], revisados: 100, noRevisados: 100 },
    TPMI: { grafica: [0, 100, 100, 100], revisados: 100, noRevisados: 0 },
    TPPL: { grafica: [200, 100, 200, 100], revisados: 300, noRevisados: 100 },
    BTDC: { grafica: [100, 0, 200, 100], revisados: 200, noRevisados: 0 },
    BTQM: { grafica: [0, 100, 0, 100], revisados: 100, noRevisados: 0 }
  };

  const [carreraSeleccionada, setCarreraSeleccionada] = useState('todas');
  const [estadisticas, setEstadisticas] = useState({
    revisados: 0,
    noRevisados: 0,
    total: 0
  });

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

useEffect(() => {
  const cargarAlumnos = async () => {
    try {
      const carrera = carreraSeleccionada === 'todas' ? null : carreraSeleccionada;

      const datos = await obtenerNumeroAlumnos({ carrera: carrera });
      console.log(datos);
      setEstadisticas(datos);
    } catch (error) {
      console.error('Error al cargar empresas:', error);
    }
  };

  cargarAlumnos();
}, [carreraSeleccionada]);


  useEffect(() => {
    const datos = datosPorCarrera[carreraSeleccionada];
    

    // Configurar gráfico
    const ctx = chartRef.current.getContext('2d');

    // Destruir gráfico anterior si existe
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Revisión', 'Selección de empresa', 'Documentación', 'En prácticas'],
        datasets: [{
          label: 'Estados de prácticas',
          data: datos.grafica,
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return value >= 1000 ? (value / 1000) + 'K' : value;
              }
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const value = context.raw;
                return ` ${value.toLocaleString()} alumnos`;
              }
            }
          }
        }
      }
    });

    // Limpieza al desmontar el componente
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [carreraSeleccionada]);

  const handleCarreraChange = (e) => {
    setCarreraSeleccionada(e.target.value);
  };

  return (
    <div>
      <HeaderCoordinador/>

      <main>
        <section id="filtros">
          <label htmlFor="carreraSelect">Carrera:</label>
          <select 
            id="carreraSelect"
            value={carreraSeleccionada}
            onChange={handleCarreraChange}
          >
            <option value="todas">Todas</option>
            <option value="TPSI">TPSI</option>
            <option value="TPAL">TPAL</option>
            <option value="TPEI">TPEI</option>
            <option value="TPPQ">TPPQ</option>
            <option value="TPMF">TPMF</option>
            <option value="TPMI">TPMI</option>
            <option value="TPPL">TPPL</option>
            <option value="BTDC">BTDC</option>
            <option value="BTQM">BTQM</option>
          </select>
        </section>

        <section id="contenido3">
          <div className="chart-container">
            <canvas ref={chartRef} id="myChart"></canvas>
          </div>
        </section>

        <section id="estadisticas">
          <h2>Estadísticas por Carrera</h2>
          <table>
            <thead>
              <tr>
                <th>Revisados</th>
                <th>No Revisados</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{estadisticas.revisados}</td>
                <td>{estadisticas.noRevisados}</td>
                <td>{estadisticas.total}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Estadisticas;