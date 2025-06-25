import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import HeaderJefeDepto from "../../componentes/jefeDepto/header_jefeDepto.jsx";
import { obtenerBarraStatusParaEstadisticas } from '../../api/coordinador';

const Estadisticas = () => {
  const [totalAlumno, setTotalAlumno] = useState(0);
  const [estadisticasGrafica, setEstadisticasGraficas] = useState({});
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  
  useEffect(() => {
    const cargarDatosGrafica = async () => {
      try {
        const response = await obtenerBarraStatusParaEstadisticas();
        setTotalAlumno(
          Number(response.barraStatus1) +
          Number(response.barraStatus2) +
          Number(response.barraStatus3) +
          Number(response.barraStatus4) +
          Number(response.barraStatus5)
        );
        setEstadisticasGraficas(response);
      } catch (error) {
        console.error('Error al cargar datos de la gráfica:', error);
      }
    };

    cargarDatosGrafica();
  }, []);

  // Crear o actualizar el gráfico
  useEffect(() => {
    if (!estadisticasGrafica || Object.keys(estadisticasGrafica).length === 0) return;

    // 1. Obtener el total de todos los estados
    const total = totalAlumno;

    // 2. Calcular el % de cada estado (si total es 0, evitar división por 0)
    const datos = total === 0 ? [0, 0, 0, 0, 0] : [
      (estadisticasGrafica.barraStatus1 / total) * 100,
      (estadisticasGrafica.barraStatus2 / total) * 100,
      (estadisticasGrafica.barraStatus3 / total) * 100,
      (estadisticasGrafica.barraStatus4 / total) * 100,
      (estadisticasGrafica.barraStatus5 / total) * 100
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
            min: 0,
            max: 100,
            ticks: {
              callback: function (value) {
                return value + '%';
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
              return `${context.raw.toFixed(1)}%`;
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


  return (
    <div>
      <HeaderJefeDepto />
      <main className="big-container">
        <section id="contenido3">
          <h2>Etapa del proceso de los alumnos</h2>
          <div className="chart-container">
            <canvas ref={chartRef} id="myChart"></canvas>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Estadisticas;
