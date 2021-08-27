import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // console.error("error",error);
          // this.token_error(error, request);
          if (error.status !== 403) {

            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
            } else if (error.error instanceof ProgressEvent) {
              // connection server error
              errorMessage = `Connection Error: No se logro establecer conexión con los servicos.`;
            }else if (error.error) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            return throwError(errorMessage);
          }
        })
      );
  }

  // token_error(error: HttpErrorResponse, request: HttpRequest<any>){
  //   if (error.status == 401) {
  //     console.log('Token no valido');
  //     this.goLogin();
  //   }else if(error.status == 403){
  //     console.log('Token expirado');
  //     this.goLogin();
  //   }
  // }

  // goLogin(){
  //   localStorage.removeItem('data_user');
  //   this.router.navigate(['/login']);
  // }
}
