export const endpoints = {
    USUARIOS: {
      CREAR_USUARIO: '/crearUsuario',
      INICIAR_SESION: '/iniciarSesion',
      GENERAR_TOKEN: '/generarToken',
      VALIDAR_TOKEN: '/validarToken',
      CERRAR_SESION: '/cerrarSesion',
    },

    ALUMNOS: {
      AÑADIR_DATOS: '/anadirDatosDelAlumno',
      CALIFICAR_EMPRESA: '/calificarEmpresa',
      GENERAR_CARTA_ASIGNACION: '/generarCartaAsignacion',
      MOSTRAR_EMPRESA_SELECCIONADA: '/mostrarEmpresaSeleccionada',
      OBTENER_BARRA_STATUS: '/obtenerBarraStatus',
      OBTENER_CALIFICACIONES_DE_LA_EMPRESA: '/obtenerCalificarEmpresa',
      POSTULAR_OFERTA_EMPRESA: '/postularOfertaEmpresa',
    },

    COORDINADOR: {
        ANADIR_EMPRESA: '/anadirEmpresa',
        ASIGNAR_FECHA_INGRESO_POR_CALIFICACIONES: '/asignarFechaIngresoPorCalificaciones',
        MODIFICAR_DATOS_ALUMNO: '/modificarDatosAlumno',
        OBTENER_ALUMNOS: '/obtenerAlumnos',
        OBTENER_ALUMNO: '/obtenerAlumno',
        OBTENER_BARRA_STATUS_PARA_ESTADISTICAS: '/obtenerBarraStatusParaEstadisticas',
        VALIDAR_ALUMNO: '/validarAlumno',
        VALIDAR_EMPRESA: '/validarEmpresa',
    },
  
    EMPRESAS: {
      OBTENER_EMPRESA: '/obtenerEmpresa',
      OBTENER_EMPRESAS: '/obtenerEmpresas',
      CREAR_EMPRESA: '/crearEmpresa',
      MODIFICAR_EMPRESA: '/modificarEmpresa'
    },
  };