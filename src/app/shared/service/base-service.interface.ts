import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Body } from '../objects/body.component';


export interface BaseServiceInferface {

    getMethod(url: string, headers?: HttpHeaders): Observable<any>;

    postMethod<T>(url: string, obj: T, headers?: HttpHeaders): Observable<any>;

    putMethod<T>(url: string, obj: T, headers?: HttpHeaders): Observable<Body>;

    deleteMethod(url: string, headers?: HttpHeaders): Observable<Body>;



}
