export const endpoints = {
    USUARIOS: {
      CREAR_USUARIO: '/crearUsuario',
      INICIAR_SESION: '/iniciarSesion',
      GENERAR_TOKEN: '/generarToken',
      VALIDAR_TOKEN: '/validarToken',
      VERIFICAR_SESION: '/verificarSesion',
      GENERAR_RECUPERAR_CONTRASEÑA: '/generarTokenRecuperarContrasena',
      RESTABLECER_CONTRA: '/restablecerContrasena',
      OBTENER_SI_HAY_TOKEN: '/obtenerSiHayToken',      
      CERRAR_SESION: '/cerrarSesion'
    },

    ALUMNOS: {
      AÑADIR_DATOS: '/anadirDatosDelAlumno',
      CALIFICAR_EMPRESA: '/calificarEmpresa',
      GENERAR_CARTA_ASIGNACION: '/generarCartaAsignacion',
      MOSTRAR_EMPRESA_SELECCIONADA: '/mostrarEmpresaSeleccionada',
      OBTENER_BARRA_STATUS: '/obtenerBarraStatus',
      OBTENER_CALIFICACIONES_DE_LA_EMPRESA: '/obtenerCalificarEmpresa',
      OBTENER_EMPRESA_PARA_USUARIO: '/obtenerEmpresaParaUsuario',
      OBTENER_ALUMNOS_ID: '/obtenerAlumnosId',
      OBTENER_EMPRESAS_PARA_USUARIO: '/obtenerEmpresasAlumnos',
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
        ELIMINAR_ALUMNO: '/eliminarAlumno',
        REVERTIR_VALIDACION: '/revertirValidacionAlumno',
        MODIFICAR_DATOS_EMPRESA: '/modificarDatosEmpresa',
        ELIMINAR_EMPRESA: '/eliminarEmpresa',
        REVERTIR_VALIDACION_EMPRESA: '/revertirValidacionEmpresa',
        OBTENER_NUMERO_ALUMNOS: '/obtenerNumeroAlumnos',
        OBTENER_FECHAS_POSTULACION: '/obtenerFechasParaPostularseEmpresas'
    },
  
    EMPRESAS: {
      OBTENER_EMPRESA: '/obtenerEmpresa',
      OBTENER_EMPRESAS: '/obtenerEmpresas',
      CREAR_EMPRESA: '/crearEmpresa',
      MODIFICAR_EMPRESA: '/modificarEmpresa'
    },
  };