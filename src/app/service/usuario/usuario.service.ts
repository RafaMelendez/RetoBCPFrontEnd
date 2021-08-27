import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormatHelper } from 'src/app/core/util/format.helper';
import { SelectModel } from 'src/app/shared/model/general/select-model.model';
import { UsuarioRequest } from 'src/app/shared/model/usuario/request/usuario.request';
import { UsuarioModel } from 'src/app/shared/model/usuario/usuario.model';
import { BaseService } from 'src/app/shared/service/base.service';
import { environment } from 'src/environments/environment.dev';
import { AlertModalService } from '../alert-modal/alert-modal.service';
// import { EndPoint } from 'global/endpoint';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService{

  private $api = `${environment.baseUrl}`;
  constructor(
    private http: HttpClient,
    public alertModalService: AlertModalService,
  ) {
    super(http, alertModalService);
  }
  getSex(): Observable<SelectModel[]>{
    const url = `${this.$api}sexo`;
    const headers = new HttpHeaders();
    const resultado = this.getMethod(url, headers) as Observable<SelectModel[]>;
    return resultado;
  }
  getListUsuario(uProduccionId?: string): Observable<UsuarioRequest[]> {
    const url = `${this.$api}usuario`;
    const headers = new HttpHeaders();
    const resultado = this.getMethod(url, headers) as Observable<UsuarioRequest[]>;
    return resultado;
  }
  getListUsuarioById(valId: number): Observable<UsuarioRequest>{
    const url = `${this.$api}usuario/${valId}`;
    const headers = new HttpHeaders();
    const resultado = this.getMethod(url, headers) as Observable<UsuarioRequest>;
    return resultado;
  }
  upsertgetListUsuario(usuarioModel: UsuarioModel): Observable<any> {
    if (usuarioModel.id === 0) {
      return this.addUsuario(usuarioModel);
    } else {
      return this.editUsuario(usuarioModel);
    }
  }

  addUsuario(usuarioModel: UsuarioModel): Observable<any> {
    // const url = `${this.$api}usuario/agregar`;
    const url = `${this.$api}usuario`;
    const body = FormatHelper.formatResponsePuntoControlForms(usuarioModel);
    const resultado = this.postMethod(url, body) as Observable<any>;
    return resultado;
  }

  editUsuario(usuarioModel: UsuarioModel): Observable<any> {
    // const url = `${this.$api}usuario/${puntoControlModel.id}`;
    const url = `${this.$api}usuario/${usuarioModel.id}`;
    const body = FormatHelper.formatResponsePuntoControlForms(usuarioModel);
    const resultado = this.putMethod(url, body) as Observable<any>;
    return resultado;
  }
  deleteUsuario(usuarioId): Observable<any> {
    // const url = `${this.$api}usuario/${puntoControlModel.id}`;
    const url = `${this.$api}usuario/${usuarioId}`;
    const resultado = this.deleteMethod(url) as Observable<any>;
    return resultado;
  }
}
