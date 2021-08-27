import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { choice, maxLength, minDate, minNumber, prop, required, date } from '@rxweb/reactive-form-validators';
import { Sexo, UsuarioInterface } from './ui/usuario.interface';

export class UsuarioModel {
    @prop()
    id: number;
    @prop()
    @required()
    nombre: string;
    @prop()
    @required()
    apellido: string;
    @prop()
    // @required({ message: '* Selecciona Tipo de Sexo.' })
    sexo: Sexo;
    @prop()
    @required()
    edad: number;

    constructor(usuario?: UsuarioInterface) {
      this.id = usuario?.id || 0;
      this.nombre = usuario?.nombre || '';
      this.apellido = usuario?.apellido || '';
      this.sexo = usuario?.sexo || null;
      this.edad = usuario?.edad || 0;
    }
}
