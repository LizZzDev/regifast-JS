import React from 'react';
import './consultarOferta.css';
import Header from "../../componentes/alumnos/header.jsx";

const ConsultarOferta = () => {
  const handleOpiniones = (empresa, logo) => {
    console.log(`Ver opiniones de ${empresa} (logo: ${logo})`);
  };

  const handlePostular = (empresa) => {
    console.log(`Postular a ${empresa}`);
  };

  return (
    <div className="montserrat">
      <Header/>

      <main>
        <section id="sectionTabla">
          <table className="montserratChiquita">
            <thead>
              <tr>
                <th>Nombre de la empresa</th>
                <th>Descripción</th>
                <th>Actividades</th>
                <th>Domicilio</th>
                <th>Vacantes</th>
                <th>Opiniones</th>
                <th>Seleccionar empresa</th>
              </tr>
            </thead>
            <tbody>
              {/* Empresa 1 */}
              <tr>
                <td>Tech Solutions S.A.</td>
                <td>Empresa dedicada al desarrollo de software empresarial</td>
                <td>Desarrollo de aplicaciones, pruebas de software, documentación</td>
                <td>Av. Tecnológico 1234, Guadalajara</td>
                <td>5</td>
                <td>
                  <button onClick={() => handleOpiniones("Tech Solutions S.A.", "tech_solutions.png")} className="form-button">
                    Opiniones
                  </button>
                </td>
                <td>
                  <button onClick={() => handlePostular("Tech Solutions S.A.")} className="form-button">
                    Postular
                  </button>
                </td>
              </tr>
              {/* Empresa 2 */}
              <tr>
                <td>Marketing Digital MX</td>
                <td>Agencia de marketing digital y redes sociales</td>
                <td>Creación de contenido, análisis de métricas, campañas publicitarias</td>
                <td>Calle Marketing 456, Zapopan</td>
                <td>3</td>
                <td>
                  <button onClick={() => handleOpiniones("Marketing Digital MX", "marketing_digital.png")} className="form-button">
                    Opiniones
                  </button>
                </td>
                <td>
                  <button onClick={() => handlePostular("Marketing Digital MX")} className="form-button" disabled>
                    Postular
                  </button>
                </td>
              </tr>
              {/* Empresa 3 */}
              <tr>
                <td>Consultoría Financiera ABC</td>
                <td>Consultoría especializada en finanzas corporativas</td>
                <td>Análisis financiero, reportes, asesoría a clientes</td>
                <td>Blvd. Financiero 789, Tlaquepaque</td>
                <td>2</td>
                <td>
                  <button onClick={() => handleOpiniones("Consultoría Financiera ABC", "consultoria_financiera.png")} className="form-button">
                    Opiniones
                  </button>
                </td>
                <td>
                  <button onClick={() => handlePostular("Consultoría Financiera ABC")} className="form-button">
                    Postular
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ConsultarOferta;