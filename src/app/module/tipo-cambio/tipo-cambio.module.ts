import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoCambioRoutingModule } from './tipo-cambio-routing.module';
import { MainComponent } from './pages/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './components/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
@NgModule({
  declarations: [MainComponent, FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    TipoCambioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ]
})
export class TipoCambioModule { }
