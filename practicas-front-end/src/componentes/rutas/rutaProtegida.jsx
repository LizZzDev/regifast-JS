import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verificarSesion } from '../../api/usuarios';

const redirigirPorRol = (rol, navigate) => {
  const rutas = {
    alumno: '/alumno_poli/',
    empresa: '/empresa_poli/',
    coordinador: '/coordinador_poli/',
    jefeDepartamento: '/jefe_poli/',
  };
  navigate(rutas[rol] || '/');
};

const RutaProtegida = ({ children, rolEsperado }) => {
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const validarSesion = async () => {
      try {
        const reponse = await verificarSesion(rolEsperado)
        if (!reponse.sesionValida) {
          redirigirPorRol(rolEsperado, navigate);
        }
        setCargando(false);
      } catch (error) {
        console.log (error);
          console.error('Error inesperado al verificar sesión:', error);
          navigate('/');
      }
    };

    validarSesion();
  }, [navigate, rolEsperado]);

  if (cargando) return <p>Verificando sesión...</p>;

  return children;
};

export default RutaProtegida;