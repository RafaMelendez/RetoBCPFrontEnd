import { prop} from '@rxweb/reactive-form-validators';
import { TipoCambioInterface } from './ui/tipo-cambio.interface';

export class TipoCambioModel {
    @prop()
    id: number;
    @prop()
    monedaOrigen: string;
    @prop()
    monedaDestino: string;
    @prop()
    valor: number;

    constructor(tipoCambio?: TipoCambioInterface) {
      this.id = tipoCambio?.Id || 0;
      this.monedaOrigen = tipoCambio?.MonedaOrigen || '';
      this.monedaDestino = tipoCambio?.MonedaDestino || '';
      this.valor = tipoCambio?.Valor || 0;
    }
}
