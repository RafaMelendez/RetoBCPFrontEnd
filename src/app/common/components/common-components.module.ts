import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DialogoConfirmacionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    DialogoConfirmacionComponent,
  ],
})
export class CommonComponentModule {}
