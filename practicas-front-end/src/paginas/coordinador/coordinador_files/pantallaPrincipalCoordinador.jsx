import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import './grafica.css';

import HeaderCoordinador from '../../../componentes/coordinador/header_coordinador';
import { obtenerBarraStatusParaEstadisticas, obtenerNumeroAlumnos } from '../../../api/coordinador';

const Estadisticas = () => {
  const [carreraSeleccionada, setCarreraSeleccionada] = useState('todas');
  const [estadisticas, setEstadisticas] = useState({
    revisados: 0,
    noRevisados: 0,
    total: 0
  });
  const [estadisticasGrafica, setEstadisticasGraficas] = useState({});
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Cargar número de alumnos
  useEffect(() => {
    const cargarAlumnos = async () => {
      try {
        const carrera = carreraSeleccionada === 'todas' ? null : carreraSeleccionada;
        const datos = await obtenerNumeroAlumnos({ carrera });
        setEstadisticas(datos);
      } catch (error) {
        console.error('Error al cargar alumnos:', error);
      }
    };

    cargarAlumnos();
  }, [carreraSeleccionada]);

  // Cargar datos de gráfica
  useEffect(() => {
    const cargarDatosGrafica = async () => {
      try {
        const carrera = carreraSeleccionada === 'todas' ? null : carreraSeleccionada;
        const response = await obtenerBarraStatusParaEstadisticas(carrera);
        setEstadisticasGraficas(response);
      } catch (error) {
        console.error('Error al cargar datos de la gráfica:', error);
      }
    };

    cargarDatosGrafica();
  }, [carreraSeleccionada]);

  // Crear o actualizar el gráfico
  useEffect(() => {
    if (!estadisticasGrafica || Object.keys(estadisticasGrafica).length === 0) return;

    const datos = [
      estadisticasGrafica.barraStatus1,
      estadisticasGrafica.barraStatus2,
      estadisticasGrafica.barraStatus3,
      estadisticasGrafica.barraStatus4,
      estadisticasGrafica.barraStatus5
    ];

    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sin iniciar', 'Revisión', 'Selección de empresa', 'Documentación', 'En prácticas'],
        datasets: [{
          label: 'Estados de prácticas',
          data: datos,
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(97, 27, 79, 0.4)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgb(170, 57, 114)'
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

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [estadisticasGrafica]);

  const handleCarreraChange = (e) => {
    setCarreraSeleccionada(e.target.value);
  };

  return (
    <div>
      <HeaderCoordinador />
      <main className="big-container">
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
                <td>{estadisticas.revisados ?? 'Cargando...'}</td>
                <td>{estadisticas.noRevisados ?? 'Cargando...'}</td>
                <td>{estadisticas.total ?? 'Cargando...'}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Estadisticas;
