export class EndPoint {
  public static get API_V1_BASE(): string { return 'api/v1'; }
  public static get ROL_ACCESOS(): string { return 'rol'; }
  public static get ROL_ACCESOS_AGREGAR(): string { return `${EndPoint.ROL_ACCESOS}/agregar`; }
  public static get ROL_ACCESOS_LISTAR(): string { return `${EndPoint.ROL_ACCESOS}/listar `; }

  public static get I_VALIDACIONES(): string { return 'validacionPuntoControl'; }

  // public static get TRABAJADOR(): string { return 'trabajador'; }
  public static get TRABAJADOR(): string { return 'trabajador'; }
  public static get TIPO_VALIDACION(): string { return 'tipoValidacion'; }
  public static get TRABAJADOR_LISTAR(): string { return `${EndPoint.TRABAJADOR}/listar`; }
  public static get TRABAJADOR_DNI(): string { return `${EndPoint.TRABAJADOR}/dnis`; }
  public static get TRABAJADOR_CONSULTA_DNI(): string { return `${EndPoint.TRABAJADOR}/consultadnis`; }
  public static get TRABAJADOR_PLANILLA(): string { return `${EndPoint.TRABAJADOR}/planilla`; }

  public static get POLIZA(): string { return 'polizaseguro'; }
  public static get POLIZA_LISTAR(): string { return `${EndPoint.POLIZA}/listar`; }
  public static get POLIZA_AGREGAR(): string { return `${EndPoint.POLIZA}/agregar`; }

  public static get ASEGURADORA(): string { return 'aseguradora'; }
  public static get ASEGURADORA_LISTAR(): string { return `${EndPoint.ASEGURADORA}/listar`; }

  public static get EMPRESA(): string { return 'empresa'; }
  public static get EMPRESA_LISTAR(): string { return `${EndPoint.EMPRESA}/listar`; }

  public static get DEPARTAMENTO(): string { return 'departamento'; }
  public static get DEPARTAMENTO_LISTAR(): string { return `${EndPoint.DEPARTAMENTO}/listar`; }

  public static get PLANILLA(): string { return 'planilla'; }
  public static get PLANILLA_LISTAR(): string { return `${EndPoint.PLANILLA}/listar`; }

  public static get MOV_PERSONAL(): string { return 'movimiento'; }
  public static get MOV_PERSONAL_LISTAR(): string { return `${EndPoint.MOV_PERSONAL}/listar`; }
  public static get MOV_PERSONAL_TRABAJADOR(): string { return `${EndPoint.MOV_PERSONAL}/trabajador`; }
  public static get MOV_PERSONAL_AGREGAR(): string { return `${EndPoint.MOV_PERSONAL}/agregar`; }

  public static get REPORTE_MARCACION(): string { return 'reporteMarcacion'; }
  public static get REPORTE_MARCACION_LISTAR(): string { return `${EndPoint.REPORTE_MARCACION}/listar`; }
  public static get REPORTE_ACCESO_PUNTO_CONTROL(): string { return 'reporteAccesosPuntoControl'; }
  public static get REPORTE_ACCESO_PUNTO_CONTROL_LISTAR(): string { return `${EndPoint.REPORTE_ACCESO_PUNTO_CONTROL}/listar`; }

  public static get SOLICITUD_ACCESOS(): string { return 'solicitud'; }
  public static get SOLICITUD_ACCESOS_LISTAR(): string { return `${EndPoint.SOLICITUD_ACCESOS}/listar`; }
  public static get SOLICITUD_ACCESOS_AGREGAR(): string { return `${EndPoint.SOLICITUD_ACCESOS}/agregar`; }
  public static get SOLICITUD_ACCESOS_AGREGAR_MASIVO(): string { return `${EndPoint.SOLICITUD_ACCESOS}/agregarMasivo`; }
  public static get SOLICITUD_ACCESOS_REPORTE_LISTAR(): string { return `${EndPoint.SOLICITUD_ACCESOS}/listarReporte`; }
  public static get SOLICITUD_ACCESOS_ESTADO_LISTAR(): string { return `${EndPoint.SOLICITUD_ACCESOS}/listarEstadoSolicitud`; }
  public static get SOLICITUD_ACCESOS_ANULAR(): string { return `${EndPoint.SOLICITUD_ACCESOS}/anular`; }
  public static get SOLICITUD_ACCESOS_APROBAR(): string { return `${EndPoint.SOLICITUD_ACCESOS}/aprobar`; }
  public static get SOLICITUD_ACCESOS_GENERAR_EXCEL(): string { return `${EndPoint.SOLICITUD_ACCESOS}/GenerarXls`; }
  public static get SOLICITUD_ACCESOS_IMPORT(): string { return `${EndPoint.SOLICITUD_ACCESOS}/importar`; }

  public static get CRON_SALIDA(): string { return 'cronogramasalida'; }
  public static get CRON_SALIDA_CICLO(): string { return `${EndPoint.CRON_SALIDA}/ciclo`; }
  public static get CRON_SALIDA_TRABAJADOR(): string { return `${EndPoint.CRON_SALIDA}/trabajador`; }
  public static get CRON_SALIDA_PERIODO(): string { return `${EndPoint.CRON_SALIDA}/periodo`; }
  public static get CRON_SALIDA_MOTIVO_MOVIMIENTO(): string { return `${EndPoint.CRON_SALIDA}/motivoMovimiento`; }

  public static get PUNTO_CONTROL(): string { return `puntocontrol`; }
  public static get PUNTO_CONTROL_LISTAR(): string { return `${EndPoint.PUNTO_CONTROL}/listar`; }
  public static get PUNTO_CONTROL_AGREGAR(): string { return `${EndPoint.PUNTO_CONTROL}/agregar`; }
  public static get PUNTO_CONTROL_GENERAR_EXCEL(): string { return `${EndPoint.PUNTO_CONTROL}/GenerarXls`; }
  public static get PUNTO_CONTROL_IMPORT(): string { return `${EndPoint.PUNTO_CONTROL}/importarMasivo`; }
}
