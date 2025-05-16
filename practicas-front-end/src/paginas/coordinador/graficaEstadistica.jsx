import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import './ver_grafica_estadistica.css';

const Estadistica = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch('/api/estadisticas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        carrera: '',    // Reemplazar dinámicamente si se desea
        busquedas: '',  // Reemplazar dinámicamente si se desea
      }),
    })
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((err) => console.error('Error al obtener los datos:', err));
  }, []);

  useEffect(() => {
    if (datos) {
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        
        type: 'pie',
        data: {
          labels: ['Revisión', 'Selección de empresa', 'Documentación', 'En prácticas'],
          datasets: [{
            label: 'Estados de prácticas',
            data: [
              datos.variable1,
              datos.variable2,
              datos.variable3,
              datos.variable4,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [datos]);

  return (
    <main>
      <header>
        <section id="nomUDG">
          <img src="img/Logo_UDG_horiz_blanco-01.svg" alt="Logo UDG" />
        </section>
        <nav className="menu">
          <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="#">ALUMNOS</a></li>
            <li><a href="#">EMPRESAS</a></li>
            <li><a href="#">OPCIONES</a></li>
          </ul>
        </nav>
      </header>

      <section id="contenido3">
        <canvas id="myChart"></canvas>
      </section>
    </main>
  );
};

export default Estadistica;