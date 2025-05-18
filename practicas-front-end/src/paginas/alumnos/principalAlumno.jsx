import React, { useState, useEffect } from 'react';
import './principalAlumno.css';
import 'https://unicons.iconscout.com/release/v4.0.8/css/line.css';

const BarraStatus = () => {
  // Estado para el progreso (simulando el valor que vendría de PHP)
  const [progreso, setProgreso] = useState(1); // Valor inicial, puedes cambiarlo o cargarlo desde una API
  
  // Datos para la barra de progreso
  const [pasos, setPasos] = useState([
    {
      id: 1,
      icono: 'uil uil-file-search-alt',
      texto: 'Revisión de datos',
      completado: false,
      clase: 'one'
    },
    {
      id: 2,
      icono: 'uil uil-shop',
      texto: 'Selección de empresa',
      completado: false,
      clase: 'two'
    },
    {
      id: 3,
      icono: 'uil uil-folder-check',
      texto: 'Documentación',
      completado: false,
      clase: 'three'
    },
    {
      id: 4,
      icono: 'uil uil-suitcase-alt',
      texto: 'Trabajar en empresa',
      completado: false,
      clase: 'four'
    }
  ]);

  // Efecto para actualizar el estado de los pasos cuando cambia el progreso
  useEffect(() => {
    const pasosActualizados = pasos.map((paso) => ({
      ...paso,
      completado: paso.id < progreso,
      activo: paso.id === progreso
    }));
    setPasos(pasosActualizados);
  }, [progreso]);

  // Textos descriptivos para cada estado
  const textosEstado = {
    1: "Revisión de datos",
    2: "Selección de empresa",
    3: "Documentación",
    4: "Trabajar en empresa"
  };

  return (
    <div className="montserrat">
      <Header />
      
      <nav className="menu">
        <ul>
          <li><a href="/calificar-empresa">CALIFICAR EMPRESA</a></li>
          <li><a href="/consultar-oferta">CONSULTAR OFERTA</a></li>
          <li><a href="/documentos">DOCUMENTOS</a></li>
          <li><a href="/logout">SALIR</a></li>
        </ul>
      </nav>
      
      <main>
        <article id="BienvenidoUsuario">
          <p id="SaludoUsuario">¡Hola, Usuario!</p>
        </article>

        <article id="ContenedorBarraProgreso">
          <section id="BarraProgeso">
            <ul id="ListaBarra">
              {pasos.map((paso) => (
                <li key={paso.id} className="ElementosBarra">
                  <i className={`icono ${paso.icono}`}></i>
                  <div className={`progress ${paso.clase} ${paso.completado || paso.activo ? 'active' : ''}`}>
                    <p>{paso.id}</p>
                    {paso.completado && <i className="uil uil-check"></i>}
                  </div>
                  <p className="text">{paso.texto}</p>
                </li>
              ))}
            </ul>
          </section>
          
          <section id="InformacionBarraEstado">
            <p>
              Tu proceso se encuentra en: <br />
              <span>{textosEstado[progreso]}</span>.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default BarraStatus;