import { router } from '../constantes/router.js';
import { endpoints } from '../constantes/endpoints.js';
import api from '../auxiliares/manejarCatch.js';

export async function anadirEmpresa(formData,) {
  try {
    const response = await api.post(
      router.COORDINADOR + endpoints.COORDINADOR.ANADIR_EMPRESA,
      formData,
      {headers: {
      'Content-Type': 'multipart/form-data',}
    }
    )
    
    return response.data.data;;
  } catch (error) {
    console.error("Error en añadir empresa:", error);
    throw error;
  }
}

export async function asignarFechaIngresoPorCalificacion(data) {
  try {
    const response = await api.put(
       router.COORDINADOR + endpoints.COORDINADOR.ASIGNAR_FECHA_INGRESO_POR_CALIFICACIONES,
      data,
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en asignar fecha de ingreso por calificacion:", error);
    throw error;
  }
}

export async function modificarDatosAlumno(data, idUsuario) {
  try {
    const response = await api.put(
       router.COORDINADOR + endpoints.COORDINADOR.MODIFICAR_DATOS_ALUMNO,
      { datos: data,
        idUsuario: idUsuario}
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en modificar datos del alumno:", error);
    throw error;
  }
}

export async function obtenerAlumno(idUsuario) {
  try {
     const params = {};
    if (idUsuario !== undefined && idUsuario !== null) {
      params.idUsuario = idUsuario;
    }
    const response = await api.get(
       router.COORDINADOR + endpoints.COORDINADOR.OBTENER_ALUMNO,
      { params}
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en obtener alumno:", error);
    throw error;
  }
}

export async function obtenerAlumnos({ pagina = 1, limite = 20, busqueda = null, carrera = null, validado = null, ordinario = null, calificacion = null } = {}) {
  try {
     const params = {
      pagina,
      limite,
      ...(carrera && { carrera }),
      ...(busqueda && { busqueda }),
      ...(validado !== null && { validado }),
      ...(ordinario !== null && { ordinario }),
      ...(calificacion !== null && { calificacion })
    };

    const response = await api.get(
       router.COORDINADOR + endpoints.COORDINADOR.OBTENER_ALUMNOS,
      { params }
    );

    return response.data.data;;
  } catch (error) {
    console.error("Error en obtener alumno:", error);
    throw error;
  }
}

export async function obtenerBarraStatusParaEstadisticas(carrera=null) {
  try {
    const response = await api.get(
       router.COORDINADOR + endpoints.COORDINADOR.OBTENER_BARRA_STATUS_PARA_ESTADISTICAS,
        { params: 
          {
            carrera: carrera,
          }
       }

    );

    return response.data.data;;
  } catch (error) {
    console.error("Error en obtener barra status para estadisticas", error);
    throw error;
  }
}

export async function obtenerNumeroAlumnos({carrera=null}) {
  try {

    const response = await api.get(
       router.COORDINADOR + endpoints.COORDINADOR.OBTENER_NUMERO_ALUMNOS,
        { params: { carrera } } 
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en obtener barra status para estadisticas", error);
    throw error;
  }
}

export async function obtenerFechasParaPostularseEmpresas() {
  try {
    const response = await api.get(
       router.COORDINADOR + endpoints.COORDINADOR.OBTENER_FECHAS_POSTULACION,

    );

    return response.data.data;;
  } catch (error) {
    console.error("Error en obtener barra status para estadisticas", error);
    throw error;
  }
}

export async function validarAlumno(idUsuario) {
  try {
    const response = await api.put(
       router.COORDINADOR + endpoints.COORDINADOR.VALIDAR_ALUMNO,
      { idUsuario: idUsuario }
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en validar alumno:", error);
    throw error;
  }
}

export async function validarEmpresa(idUsuario) {
  try {
    const response = await api.put(
       router.COORDINADOR + endpoints.COORDINADOR.VALIDAR_EMPRESA,
      { idUsuario: idUsuario }
    );

    return response.data.data;;
  } catch (error) {
    console.error("Error en validar empresa:", error);
    throw error;
  }
}

export async function revertirValidacionAlumno(idUsuario) {
  try {
    const response = await api.put(
       router.COORDINADOR + endpoints.COORDINADOR.REVERTIR_VALIDACION,
      { idUsuario: idUsuario }
    );

    return response.data.data;;
  } catch (error) {
    console.error("Error en revertir validacion del alumno:", error);
    throw error;
  }
}

export async function eliminarAlumno(idUsuario) {
  try {
    const response = await api.delete(
       router.COORDINADOR + endpoints.COORDINADOR.ELIMINAR_ALUMNO,
        {
        params: {
          idUsuario: idUsuario
        }
      }
    );

    return response.data.data;;
  } catch (error) {
    console.error("Error en eliminar alumno:", error);
    throw error;
  }
}

export async function revertirValidacionEmpresa(idUsuario) {
  try {
    const response = await api.put(
       router.COORDINADOR + endpoints.COORDINADOR.REVERTIR_VALIDACION_EMPRESA,
      { idUsuario: idUsuario }
    );

    return response.data.data;;
  } catch (error) {
    console.error("Error en revertir validacion de la empresa:", error);
    throw error;
  }
}

export async function eliminarEmpresa({idUsuario=null, idEmpresa=null}) {
  try {
    const response = await api.delete(
       router.COORDINADOR + endpoints.COORDINADOR.ELIMINAR_EMPRESA,      
             {
        params: {
          idUsuario: idUsuario,
          idEmpresa: idEmpresa
        }
      }

    );

    return response.data.data;;
  } catch (error) {
    console.error("Error en eliminar empresa:", error);
    throw error;
  }
}

export async function modificarDatosEmpresa({data, idUsuario}) {
  try {
    const response = await api.put(
       router.COORDINADOR + endpoints.COORDINADOR.MODIFICAR_DATOS_EMPRESA,
      { datos: data,
        idEmpresa: idUsuario}
    );
    return response.data.data;;
  } catch (error) {
    console.error("Error en modificar datos de la empresa:", error);
    throw error;
  }
}