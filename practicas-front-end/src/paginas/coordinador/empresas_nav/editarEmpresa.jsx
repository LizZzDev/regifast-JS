import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './editarEmpresa.css';
import HeaderCoordinador from '../../../componentes/coordinador/header_coordinador';
import { eliminarEmpresa, modificarDatosEmpresa, revertirValidacionEmpresa, validarEmpresa } from '../../../api/coordinador';
import { obtenerEmpresa } from '../../../api/empresas';

const EditarEmpresa = () => {
  const { idUsuario } = useParams();
  const [empresa, setEmpresa] = useState({});
  const [formData, setFormData] = useState({});
    const navigate = useNavigate();


  const cargarEmpresa = async () => {
    try {
      const response = await obtenerEmpresa(idUsuario);
      setEmpresa(response);
    } catch (error) {
      alert("No se pudo obtener el empresa", error);
    }
  };

  useEffect(() => {
    cargarEmpresa();
  }, [idUsuario]);

  useEffect(() => {
    if (empresa) {
      setFormData({
        Nombre: empresa.Nombre || '',
        RFC: empresa.RFC || '',
        Telefono: empresa.Telefono || '',
        Correo: empresa.Correo || '',
        DomicilioFiscal: empresa.DomicilioFiscal || '',
        Descripcion: empresa.Descripcion || '',
        Logo: empresa.Logo || '',
        Actividades: empresa.Actividades || '',
        Vacantes: empresa.Vacantes || '',
        Responsable: empresa.Responsable || '',
        Cargo: empresa.Cargo || '',
      });
    }
  }, [empresa]);

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errores[name]) {
      setErrores(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const campoModificado = (campo) => {
  return String(formData[campo]) !== String(empresa[campo]);
};

  const handleSubmit = async (e) => {
     e.preventDefault(); 
    const cambios = {};

  
    for (const key in formData) {
      const valorForm = formData[key] ?? ''; 
      const valorEmpresa = empresa[key] ?? '';
      
      if (String(valorForm) !== String(valorEmpresa)) {
        cambios[key] = formData[key];
      }
}

    if (Object.keys(cambios).length === 0) {
      alert("No se hicieron cambios.");
      return;
    }

    try {
      
        await modificarDatosEmpresa({data: cambios, idUsuario: empresa.IdEmpresa});
        alert("La información se modificó correctamente");
        navigate('/coordinador/empresas');

    } catch (error) {
        alert("No se pudo realizar la modificacion:", error.response?.data?.message)
    }

    }

    const validarEmpresaConst = async (idUsuario) => {
      if (window.confirm('¿Estás seguro de que deseas validar al empresa?')) {
        try {
          await validarEmpresa(idUsuario)
          alert("Validacion exitosa");
          cargarEmpresa();

        } catch (error) {
          alert ("Error al validar:", error);
        }
      }}

    const revertirValidacionEmpresaConst = async (idUsuario) => {
      if (window.confirm('¿Estás seguro de que deseas revertir esta validacion?')) {
        try {
          await revertirValidacionEmpresa(idUsuario)
          alert("Validacion revertida exitosamente");
          cargarEmpresa();

        } catch (error) {
          alert ("Error al revertir la validacion:", error);
        }
    }}

    const eliminarEmpresaConst = async (idEmpresa) => {
      if (window.confirm('¿Estás seguro de que deseas eliminar al empresa? Esta accion es irreversible.')) {
      try {
        await eliminarEmpresa({idEmpresa: idEmpresa})
        alert("Se elimino al empresa");
        cargarEmpresa();
        navigate("/coordinador/empresas");

      } catch (error) {
        alert ("Error al eliminar empresa:", error);
      }
    }}

  return (
    <>
      <HeaderCoordinador />
      <div id="contenedor-editar-empresa">
        <h2 id="titulo-editar-empresa">Editar datos de la empresa</h2>
        
        <form onSubmit={handleSubmit} id="form-editar-empresa">
            <div className="grupo-campos">              
              <div className="campo-formulario">
                <label htmlFor="input-codigo">Nombre</label>
                <input
                  className={campoModificado("Nombre") ? "modificado" : ""}
                  id="input-nombre"
                  name="Nombre"
                  value={formData.Nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-RFC">RFC</label>
                <input
                  className={campoModificado("RFC") ? "modificado" : ""}                
                  id="input-RFC"
                  name="RFC"
                  value={formData.RFC}
                  onChange={handleChange}
                />
              </div>

              
              <div className="campo-formulario">
                <label htmlFor="input-telefono">Telefono</label>
                <input
                  id="input-telefono"
                  name="Telefono"
                  value={formData.Telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-correo">Correo</label>
                <input
                  id="input-correo"
                  name="Correo"
                  value={formData.Correo}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-domicilio-fiscal">Domicilio Fiscal</label>
                <input
                  id="input-domicilio-fiscal"
                  name="DomicilioFiscal"
                  value={formData.DomicilioFiscal}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-descripcion">Descripcion</label>
                <input
                  id="input-descripcion"
                  name="Descripcion"
                  value={formData.Descripcion}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-actividades">Actividades</label>
                <input
                  id="input-actividades"
                  name="Actividades"
                  value={formData.Actividades}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-vacantes">Vacantes</label>
                <input
                  id="input-vacantes"
                  name="Vacantes"
                  value={formData.Vacantes}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-responsable">Responsable</label>
                <input
                  id="input-responsable"
                  name="Responsable"
                  value={formData.Responsable}
                  onChange={handleChange}
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="input-cargo">Cargo del responsable</label>
                <input
                  id="input-cargo"
                  name="Cargo"
                  value={formData.Cargo}
                  onChange={handleChange}
                />
              </div>
          </div>

          <div className="contenedor-botones">
            <button type="submit" className="boton-guardar-empresa">
              Guardar cambios
            </button>
            
            <button type="button" onClick={() => eliminarEmpresaConst(empresa.IdEmpresa)} className="boton-empresa">
              Eliminar empresa
            </button>

            {empresa.Validada === 0 ? (
               <button type="button" onClick={() => validarEmpresaConst(empresa.IdEmpresa)}  className="boton-empresa" id="boton-validar-empresa">
                  Validar empresa
                </button>
            ) : (
              <button type="button" onClick={() => revertirValidacionEmpresaConst(empresa.IdEmpresa)} className="boton-empresa"  id="boton-revertir-validacion-empresa">
                Revertir validación
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default EditarEmpresa;