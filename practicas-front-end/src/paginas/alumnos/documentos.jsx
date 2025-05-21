import React, { useState, useEffect } from 'react';
import './documentos.css';
import Header from "../../componentes/alumnos/header.jsx";
import { generarCartaAsignacion, obtenerBarraStatus } from '../../api/alumnos';

const DocumentosAlumno = () => {
  const [estado, setEstado] = useState({
    progreso: 1,
    empresaAsignada: null
  });

  const [documentos, setDocumentos] = useState([
    {
      id: 1,
      nombre: 'Carta de Asignación',
      disponible: false,
      estatus: 'Pendiente',
      claseEstatus: 'pending',
      accion: 'generarDocumentoAsignacion'
    }
  ]);

    useEffect(() => {
      const salir = async () => {
        try {
          const datos = await obtenerBarraStatus();
          if (datos < 3 || datos == null) {
            alert("Tu documento aun no se encuentra disponible.");
            window.location.href = '/alumno/principal';
          }
        } catch (error) {
          console.error('Error al verificar etapa del alumno:', error);
        }
      };
  
      salir(); 
    }, []);

  useEffect(() => {
    const cargarDatos = async () => {
      const datosEjemplo = {
        progreso: 3,
        empresa: { nombre: "Empresa Ejemplo S.A." }
      };

      setEstado({
        progreso: datosEjemplo.progreso,
        empresaAsignada: datosEjemplo.empresa
      });
    };

    cargarDatos();
  }, []);

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

  const manejarDescarga = async (accion) => {
    if (accion === 'generarDocumentoAsignacion') {
      await generarCartaAsignacion();
    }
  };

  return (
    <div className="app-container">  {/* Se agregó esta clase para controlar la disposición global */}
      <Header />

      <main className="main-container">
        <section className="documents-section">
          <h2>Documentos Disponibles</h2>
          <div className="documents">
            {documentos.map((doc) => (
              <div key={doc.id} className="document-card">
                <h3>{doc.nombre}</h3>
                <p id="estatus">
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
          <p id="avisoImportante">
            Recuerda que los documentos estarán disponibles conforme avances en tu proceso. 
            Si tienes alguna duda, contacta al departamento de prácticas profesionales.
          </p>
        </section>
      </main>
    </div>
  );
};

export default DocumentosAlumno;
