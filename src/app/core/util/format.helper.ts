import { UsuarioRequest } from 'src/app/shared/model/usuario/request/usuario.request';
import { UsuarioInterface } from 'src/app/shared/model/usuario/ui/usuario.interface';
import { UtilHelper } from './utils.helper';

export class FormatHelper {


  // public static formatRequestTrabajadorSearchDni(trabajador: TrabajadorSearchDniRequest): TrabajadorPersonaInterface {
  //   let result = null;
  //   if (trabajador) {
  //     result = {
  //       Nombre: trabajador.NOMBRES,
  //       Apellidos: `${trabajador.APELL_PATERNO} ${trabajador.APELL_MATERNO}`,
  //       FechaIngreso: UtilHelper.parseUTCDate(trabajador.FEC_INGRESO),
  //       dni: trabajador.LIB_ELEC,
  //       trab_id: trabajador.TRAB_ID,
  //       set_id: trabajador.SET_ID,
  //       Estado: trabajador.ESTADO_TRAB,
  //       categoria: trabajador.Categoria,
  //     } as TrabajadorPersonaInterface;
  //   }
  //   return result;
  // }

  public static formatResponseUsuarioListRequest(usuario: UsuarioRequest[]): UsuarioInterface[] {
    let result = [];
    if (usuario && usuario.length > 0) {
      result = usuario.map(item => {
        return FormatHelper.formatResponseUsuarioRequest(item);
      });
    }
    return result;
  }

  public static formatResponseUsuarioRequest(usuario: UsuarioRequest): UsuarioInterface {
    let result = null;
    if (usuario) {
      result = {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        sexo: usuario.sexo,
        // fechaCrea: UtilHelper.parseUTCDate(puntoControl.fechaCrea),
        edad: usuario.edad
      } as UsuarioInterface;
    }
    return result;
  }
  public static formatResponsePuntoControlForms(usuarioModel: UsuarioInterface): UsuarioRequest {
    let result = null;
    if (usuarioModel) {
      result = {
        id: usuarioModel.id,
        nombre: usuarioModel.nombre,
        apellido: usuarioModel.apellido,
        sexo: usuarioModel.sexo,
        // sexoDescripcion: usuarioModel.nombre,
        edad: usuarioModel.edad
      } as UsuarioRequest;
    }
    return result;
  }

}
