import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectModel } from 'src/app/shared/model/general/select-model.model';
import { TipoCambioRequest } from 'src/app/shared/model/tipo-cambio/request/tipo-cambio.request';
import { TipoCambioModel } from 'src/app/shared/model/tipo-cambio/tipo-cambio';
import { BaseService } from 'src/app/shared/service/base.service';
import { environment } from 'src/environments/environment.dev';
import { AlertModalService } from '../alert-modal/alert-modal.service';

@Injectable({
  providedIn: 'root'
})
export class TipoCambioService extends BaseService{
  private $api = `${environment.baseUrl}`;
  constructor(
    private http: HttpClient,
    public alertModalService: AlertModalService,
  ) {
    super(http, alertModalService);
  }
  getListTipoCambios(): Observable<TipoCambioModel[]> {
    const url = `${this.$api}TipoCambio/GetList`;
    const headers = new HttpHeaders();
    const resultado = this.getMethod(url, headers) as Observable<TipoCambioModel[]>;
    return resultado;
  }
  getListTipoMonedas(): Observable<SelectModel[]>{
    const url = `${this.$api}tipoMoneda/GetList`;
    const headers = new HttpHeaders();
    const resultado = this.getMethod(url, headers) as Observable<SelectModel[]>;
    return resultado;
  }
  consultarTipoCambio(usuarioModel: any): Observable<any> {
    // const url = `${this.$api}usuario/agregar`;
    const url = `${this.$api}TipoCambio/Consultar`;
    const resultado = this.postMethod(url, usuarioModel) as Observable<any>;
    return resultado;
  }
}
