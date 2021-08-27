import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BaseServiceInferface } from './base-service.interface';
import { map, catchError, timeoutWith, timeout } from 'rxjs/operators';
import { of, Observable, throwError, EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { SweetAlertTypeEnum } from '../enum/sweet-alert-type.enum';
import { AlertModalService } from 'src/app/service/alert-modal/alert-modal.service';
import { GeneralRequest } from '../model/general/body.component';

@Injectable({ providedIn: 'root' })

export class BaseService implements BaseServiceInferface {
  // public timeSeguridad: any = 20000;
  // public timeSolicitud: any = 20000;
  public modelFake: any;
  constructor(
    private httpClient: HttpClient,
    public alertModalService: AlertModalService
  ) {

  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  // tslint:disable-next-line:typedef
  addModelFake(modelReponse: any) {
    this.modelFake = {};
    this.modelFake.result = [];
    this.modelFake.result = modelReponse;
    this.modelFake.status_code = 200;
    return this.modelFake;
  }


  getMethod(url: string, request?: HttpHeaders, fnFormatHelper?: (res: any) => any): Observable<any> {
    return this.httpClient.get<GeneralRequest<any>>(url, { headers: request }).pipe(
      map((res: GeneralRequest<any>) => {
        this.modelFake = this.addModelFake(res);
        let response = [];
        if (this.modelFake.status_code === 200) {
          if (this.modelFake.result.entity == undefined ||
              this.modelFake.result.entity == null) {
            response = this.modelFake.result.entityList;
          } else {
            response = this.modelFake.result.entity;
          }
        } else {
          throw new Error('No se ha logrado obtener datos del servidor');
        }
        return response;
      }),
      catchError(err => {
        if (typeof (err) === 'string') {
          this.alertModalService.alert(SweetAlertTypeEnum.error, err);
        } else {
          this.alertModalService.alert(SweetAlertTypeEnum.error, err.message);
        }
        return of([]);
      }),
    );
  }

  postMethod<T>(url: string, obj: T): Observable<any> {
    return this.httpClient.post(url, obj, this.httpOptions).pipe(
      map((res: GeneralRequest<any>) => {
        this.modelFake = this.addModelFake(res);
        let response = [];
        if (this.modelFake.status_code === 200) {
          response = this.modelFake.result.entity;
        } else {
          throw new Error('No se ha logrado obtener datos del servidor');
        }
        return response;
      }),
      catchError(err => {
        if (typeof (err) === 'string') {
          this.alertModalService.alert(SweetAlertTypeEnum.error, err);
        } else {
          this.alertModalService.alert(SweetAlertTypeEnum.error, err.message);
        }
        return of([]);
      }),
    );
  }
  putMethod<T>(url: string, obj: T): Observable<any> {
    return this.httpClient.put(url, obj, this.httpOptions).pipe(
      map((res: GeneralRequest<any>) => {
        this.modelFake = this.addModelFake(res);
        let response = [];
        // if (res.status_code == 200) {
        if (this.modelFake.status_code === 200) {
          // response = FormatHelper.formatRequestLocation(res.result);
          response = this.modelFake.result;
        } else {
          throw new Error('No se ha logrado obtener datos del servidor');
        }
        return response;
      }),
      catchError(err => {
        if (typeof (err) === 'string') {
          this.alertModalService.alert(SweetAlertTypeEnum.error, err);
        } else {
          this.alertModalService.alert(SweetAlertTypeEnum.error, err.message);
        }
        return of([]);
      }),
    );
  }

  deleteMethod(url: string, request?: HttpHeaders): Observable<any> {

    return this.httpClient.delete(url, { headers: request }).pipe(
      map((res: GeneralRequest<any>) => {
        this.modelFake = this.addModelFake(res);
        let response = [];
        // if (res.status_code == 200) {
        if (this.modelFake.status_code === 200) {
          // response = FormatHelper.formatRequestLocation(res.result);
          response = this.modelFake.result;
        } else {
          throw new Error('No se ha logrado obtener datos del servidor');
        }
        return response;
      }),
      catchError(err => {
        if (typeof (err) === 'string') {
          this.alertModalService.alert(SweetAlertTypeEnum.error, err);
        } else {
          this.alertModalService.alert(SweetAlertTypeEnum.error, err.message);
        }
        return of([]);
      }),
    );
  }

}

