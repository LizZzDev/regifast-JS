import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './editarEmpresa.css';
import HeaderCoordinador from '../../../componentes/coordinador/header_coordinador';
import { eliminarEmpresa, revertirValidacionEmpresa, validarEmpresa } from '../../../api/coordinador';
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
      alert("No se pudo obtener la empresa", error);
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

  const validarEmpresaConst = async (idUsuario) => {
    if (window.confirm('¿Estás seguro de que deseas validar la empresa?')) {
      try {
        await validarEmpresa(idUsuario);
        alert("Validación exitosa");
        cargarEmpresa();
      } catch (error) {
        alert("Error al validar:", error);
      }
    }
  };

  const revertirValidacionEmpresaConst = async (idUsuario) => {
    if (window.confirm('¿Estás seguro de que deseas revertir esta validación?')) {
      try {
        await revertirValidacionEmpresa(idUsuario);
        alert("Validación revertida exitosamente");
        cargarEmpresa();
      } catch (error) {
        alert("Error al revertir la validación:", error);
      }
    }
  };

  const eliminarEmpresaConst = async (idEmpresa) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar la empresa? Esta acción es irreversible.')) {
      try {
        await eliminarEmpresa({ idEmpresa });
        alert("Se eliminó la empresa");
        cargarEmpresa();
        navigate("/coordinador_poli/empresas");
      } catch (error) {
        alert("Error al eliminar empresa:", error);
      }
    }
  };

  return (
    <>
      <HeaderCoordinador />
      <div id="contenedor-editar-empresa">
        <h2 id="titulo-editar-empresa">Ver datos de la empresa</h2>
        <form id="form-editar-empresa">
          <div className="grupo-campos">
            <div className="campo-formulario">
              <label htmlFor="input-nombre">Nombre</label>
              <input id="input-nombre" name="Nombre" value={formData.Nombre} readOnly />
            </div>

            <div className="campo-formulario">
              <label htmlFor="input-RFC">RFC</label>
              <input id="input-RFC" name="RFC" value={formData.RFC} readOnly />
            </div>

            <div className="campo-formulario">
              <label htmlFor="input-telefono">Teléfono</label>
              <input id="input-telefono" name="Telefono" value={formData.Telefono} readOnly />
            </div>

            <div className="campo-formulario">
              <label htmlFor="input-correo">Correo</label>
              <input id="input-correo" name="Correo" value={formData.Correo} readOnly />
            </div>

            <div className="campo-formulario">
              <label htmlFor="input-domicilio-fiscal">Domicilio Fiscal</label>
              <input id="input-domicilio-fiscal" name="DomicilioFiscal" value={formData.DomicilioFiscal} readOnly />
            </div>

            <div className="campo-formulario">
              <label htmlFor="input-descripcion">Descripción</label>
              <input id="input-descripcion" name="Descripcion" value={formData.Descripcion} readOnly />
            </div>

            <div className="campo-formulario">
              <label htmlFor="input-actividades">Actividades</label>
              <input id="input-actividades" name="Actividades" value={formData.Actividades} readOnly />
            </div>

            <div className="campo-formulario">
              <label htmlFor="input-vacantes">Vacantes</label>
              <input id="input-vacantes" name="Vacantes" value={formData.Vacantes} readOnly />
            </div>

            <div className="campo-formulario">
              <label htmlFor="input-responsable">Responsable</label>
              <input id="input-responsable" name="Responsable" value={formData.Responsable} readOnly />
            </div>

            <div className="campo-formulario">
              <label htmlFor="input-cargo">Cargo del responsable</label>
              <input id="input-cargo" name="Cargo" value={formData.Cargo} readOnly />
            </div>
          </div>

          <div className="contenedor-botones">
            <button type="button" onClick={() => eliminarEmpresaConst(empresa.IdEmpresa)} className="boton-empresa">
              Eliminar empresa
            </button>

            {empresa.Validada === 0 ? (
              <button type="button" onClick={() => validarEmpresaConst(empresa.IdEmpresa)} className="boton-empresa" id="boton-validar-empresa">
                Validar empresa
              </button>
            ) : (
              <button type="button" onClick={() => revertirValidacionEmpresaConst(empresa.IdEmpresa)} className="boton-empresa" id="boton-revertir-validacion-empresa">
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
