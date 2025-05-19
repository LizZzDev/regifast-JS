import React, { useEffect, useState } from "react";
import "./principalJefe.css";

import HeaderJefeDepto from "../../componentes/jefeDepto/header_jefeDepto.jsx";


function principalJefe() {
  const [nombreUsuario, setNombreUsuario] = useState("");

  useEffect(() => {
    // Hacer una solicitud GET al backend para obtener el nombre del jefe de departamento
    fetch("http://localhost:3001/jefe-departamento")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener el nombre del jefe");
        }
        return response.json();
      })
      .then((data) => {
        setNombreUsuario(data.nombre); // Establecer el nombre recibido
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="page">
      <HeaderJefeDepto/>

      <main>
        <section id="titleA">
          <h2 id="SaludoUsuario">¡Hola, {nombreUsuario}!</h2>
        </section>
      </main>
    </div>
  );
}

export default principalJefe;