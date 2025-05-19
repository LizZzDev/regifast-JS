import React, { useState, useEffect } from 'react';
import './documentos.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';

const DocumentosAlumno = () => {
  // Estado para controlar el progreso y la empresa asignada
  const [estado, setEstado] = useState({
    progreso: 1, // Valor inicial (debería venir de tu API)
    empresaAsignada: null // Datos de la empresa (null si no tiene)
  });

  // Estado para los documentos
  const [documentos, setDocumentos] = useState([
    {
      id: 1,
      nombre: 'Carta de Asignación',
      disponible: false,
      estatus: 'Pendiente',
      claseEstatus: 'pending',
      accion: 'generarDocumentoAsignacion'
    },
    {
      id: 2,
      nombre: 'Carta Compromiso',
      disponible: false,
      estatus: 'No Disponible',
      claseEstatus: 'unavailable',
      accion: null
    }
  ]);

  // Efecto para simular la carga de datos (reemplazar con tu API real)
  useEffect(() => {
    // Simulamos una llamada a la API
    const cargarDatos = async () => {
      // Datos de ejemplo - en una app real esto vendría de tu backend
      const datosEjemplo = {
        progreso: 3, // Cambia este valor para probar diferentes estados
        empresa: { nombre: "Empresa Ejemplo S.A." } // o null para probar cuando no hay empresa
      };

      setEstado({
        progreso: datosEjemplo.progreso,
        empresaAsignada: datosEjemplo.empresa
      });
    };

    cargarDatos();
  }, []);

  // Efecto para actualizar disponibilidad de documentos
  useEffect(() => {
    const documentosActualizados = documentos.map(doc => {
      const disponible = estado.progreso > 2 && estado.empresaAsignada !== null;
      
      return {
        ...doc,
        disponible,
        estatus: disponible ? 'Disponible' : doc.estatus,
        claseEstatus: disponible ? 'available' : doc.claseEstatus
      };
    });

    setDocumentos(documentosActualizados);
  }, [estado.progreso, estado.empresaAsignada]);

  // Manejar la descarga de documentos
  const manejarDescarga = (accion) => {
    if (!accion) return;
    
    // Aquí iría la lógica para generar/descargar el documento
    console.log(`Generando documento: ${accion}`);
    
    // Ejemplo con React Router:
    // navigate(`/${accion}`, { state: { empresa: estado.empresaAsignada } });
    
    // Ejemplo para descarga directa:
    // window.location.href = `/${accion}.html`;
  };

  return (
    <div className="montserrat">
      <header id="palNav">
        <article id="nomUDG">
          <img src="../img/udg_white.png" id="logo" alt="Logo UDG" />
        </article>
        <nav className="menu">
          <ul>
            <li><a href="/principal-alumno">INICIO</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-container">
        <section className="documents-section">
          <h2>Documentos Disponibles</h2>
          <div className="documents">
            {documentos.map((doc) => (
              <div key={doc.id} className="document-card">
                <h3>{doc.nombre}</h3>
                <p>
                  Estatus: 
                  <span className={`status ${doc.claseEstatus}`}>
                    {doc.estatus}
                  </span>
                </p>
                <button
                  className={`btn-download ${doc.disponible ? 'downloadBtn' : ''}`}
                  onClick={() => manejarDescarga(doc.accion)}
                  disabled={!doc.disponible}
                >
                  Descargar
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="info-section">
          <h2>Información Importante</h2>
          <p>
            Recuerda que los documentos estarán disponibles conforme avances en tu proceso. 
            Si tienes alguna duda, contacta al departamento de prácticas profesionales.
          </p>
        </section>
      </main>
    </div>
  );
};

export default DocumentosAlumno;