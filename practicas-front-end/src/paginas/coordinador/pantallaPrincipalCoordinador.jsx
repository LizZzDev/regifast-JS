import React, { useEffect, useState } from "react";
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { obtenerBarraStatusParaEstadisticas } from "../../services/estadisticas.service";
import { Bar } from "react-chartjs-2";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarraEstadistica = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchBarraData() {
      try {
        const resultado = await obtenerBarraStatusParaEstadisticas();
        setData(resultado);
      } catch (error) {
        console.error("Error al obtener datos de la gráfica", error);
      }
    }

    fetchBarraData();
  }, []);

  if (!data) return <p>Cargando...</p>;

  const chartData = {
    labels: ["Revisión", "Selección de empresa", "Documentación", "En prácticas"],
    datasets: [
      {
        label: "Cantidad de alumnos",
        data: [
          data.barraStatus1,
          data.barraStatus2,
          data.barraStatus3,
          data.barraStatus4,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarraEstadistica;
