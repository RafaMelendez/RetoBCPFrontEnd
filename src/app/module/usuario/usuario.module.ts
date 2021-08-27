import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { MainComponent } from './pages/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsComponent } from './components/forms.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@NgModule({
  declarations: [MainComponent, FormsComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ]
})
export class UsuarioModule { }
