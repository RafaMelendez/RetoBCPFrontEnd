import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { Subscriber, Observable } from 'rxjs';
import { SweetAlertTypeEnum } from 'src/app/shared/enum/sweet-alert-type.enum';

@Injectable({ providedIn: 'root' })
export class AlertModalService {

  alert(type: SweetAlertTypeEnum, message: string, title?: string): void {
    Swal.fire(
      this.changeTitleSimple(type, title),
      message || 'Alerta sin mensaje',
      type
    );
  }

  alertConfirm(type: SweetAlertTypeEnum, message: string, title?: string): Observable<boolean> {
      return new Observable((observer: Subscriber<boolean>) => {
      Swal.fire({
        title: this.changeTitleSimple(type, title),
        html: message,
        icon: type,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      }).then((result: any) => {
        if (result.value) {
          observer.next(true);
        } else {
          observer.next(false);
        }
      });
    });
  }

  alertCustomConfirm(type: SweetAlertTypeEnum, configAlert: SweetAlertOptions, title?: string): Observable<boolean> {
    return new Observable((observer: Subscriber<boolean>) => {
      configAlert.icon = type;
      configAlert.title = !configAlert.title ? this.changeTitleSimple(type, title) : configAlert.title;
      configAlert.html = configAlert.html || 'Alerta sin mensaje';
      configAlert.showCancelButton = true;
      Swal.fire(configAlert).then((result: any) => {
        if (result.value) {
          observer.next(true);
        } else {
          observer.next(false);
        }
      });
    });
  }

  private changeTitleSimple(type: SweetAlertTypeEnum, setTitle?: string): string {
    let title = '';
    if (setTitle && setTitle.toString().trim() !== '') {
      title = setTitle;
    } else {
      switch (type) {
        case SweetAlertTypeEnum.error:
          title = '¡Error!';
          break;
        case SweetAlertTypeEnum.info:
          title = 'Información';
          break;
        case SweetAlertTypeEnum.question:
          title = '¿Está seguro?';
          break;
        case SweetAlertTypeEnum.success:
          title = '¡Éxito!';
          break;
        case SweetAlertTypeEnum.warning:
          title = '¡Tenga Cuidado!';
          break;
        default:
          break;
      }
    }
    return title;
  }
}
