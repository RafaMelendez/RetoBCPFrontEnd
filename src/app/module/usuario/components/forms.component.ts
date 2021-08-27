import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { AlertModalService } from 'src/app/service/alert-modal/alert-modal.service';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { SweetAlertTypeEnum } from 'src/app/shared/enum/sweet-alert-type.enum';
import { takeUntil } from 'rxjs/operators';
import { SelectModel } from 'src/app/shared/model/general/select-model.model';
import { UsuarioModel } from 'src/app/shared/model/usuario/usuario.model';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, AfterViewInit, OnDestroy {
  public usuarioFormGroup: FormGroup;
  public sexoModel: SelectModel[] = [];
  public tituloForm: string  ;

  loadingFormData = false;

  private unsubscribe$ = new Subject<void>();

  constructor( private formBuilder: RxFormBuilder,
               private alertModalService: AlertModalService,
               public dialogRef: MatDialogRef<FormsComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private usuarioService: UsuarioService) {
                }

  ngOnInit(): void {
    this.tituloForm = '';
    this.usuarioFormGroup = this.formBuilder.formGroup(new UsuarioModel());
    if (this.data && this.data.id) {
      this.getUsuarioById(this.data.id);
    } else {
      this.tituloForm = 'Registrar usuario';
      // this.loadingFormData = true;
      this.obtenerSexoList();
    }
  }

  ngAfterViewInit(): void{
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
    this.unsubscribe$.unsubscribe();
  }
  obtenerSexoList(): void {
    this.sexoModel = [];
    this.usuarioService
      .getSex()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(list => {
        if (list.length > 0) {
          this.sexoModel = list;
        }
        // Only for update
        if (this.usuarioFormGroup.get('id').value) {
          const tipoValidacionSelect = this.usuarioFormGroup.get('sexo').value;
          const indexSelect = this.sexoModel.findIndex(x => x.id === tipoValidacionSelect.id);
          this.usuarioFormGroup.get('sexo').setValue(this.sexoModel[indexSelect]);
        }
      });
  }
  getUsuarioById(usuarioId: number): void {
    this.tituloForm = 'Modificar Usuario';
    this.usuarioService
      .getListUsuarioById(usuarioId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(model => {
        console.log(model);
        this.usuarioFormGroup = this.formBuilder.formGroup(new UsuarioModel(model));
        this.obtenerSexoList();
      });
  }
  save(): void {
    if (!this.loadingFormData && this.usuarioFormGroup.valid) {
      this.loadingFormData = true;
      const usuarioModel = this.usuarioFormGroup.value;

      this.usuarioService
        .upsertgetListUsuario(usuarioModel)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(model => {
          this.loadingFormData = false;
          if (model) {
            this.dialogRef.close(true);
            this.alertModalService.alert(SweetAlertTypeEnum.success, `Registro guardado`);
          }
        });
    }
  }
  trackByFn(index, item): void {
    return item.id;
  }

}
