export class RoutesPath {
  public static get HOME(): string { return 'home'; }
  public static get AUTH(): string { return 'auth'; }
  public static get LOGIN(): string { return 'login'; }

  public static get CA_PUNTO_CONTROL(): string { return 'ca/puntoControl'; }
  public static get CA_ROL_ACCESO(): string { return 'ca/rolAcceso'; }
  public static get CA_POLIZA_SEGURO(): string { return 'ca/polizaSeguro'; }

  public static get INGRESO_SOLICITUD_ACCESO(): string { return 'ingreso/solicitudAcceso'; }
  public static get INGRESO_CRONOGRAMA_SALIDA(): string { return 'ingreso/cronogramaSalida'; }
  public static get INGRESO_MOV_PERSONAL(): string { return 'ingreso/movPersonal'; }
  public static get INGRESO_VALIDACIONES(): string { return 'ingreso/validaciones'; }

  public static get CONSULTAS_ACCESO_PUNTO_CONTROL(): string { return 'consultas/accesoPuntoControl'; }
  public static get CONSULTAS_SOLICITUD_ACCESO(): string { return 'consultas/solicitudAcceso'; }
  public static get CONSULTAS_MOV_PERSONAL_CTTA(): string { return 'consultas/movPersonalCTTA'; }
  public static get CONSULTAS_CRONOGRAMA_SALIDA_CTTA(): string { return 'consultas/cronogramaSalidaCTTA'; }
  public static get CONSULTAS_REPO_MARCACIONES(): string { return 'consultas/repoMarcaciones'; }
  // Nuevo
  public static get USUARIO(): string { return 'usuario'; }
  public static get TIPO_CAMBIO(): string { return 'tipoCambio'; }
}

