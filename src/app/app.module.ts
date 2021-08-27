import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getDutchPaginatorIntl } from './core/util/material-lang-paginator';
import { TemplateModule } from './template/template.module';
import { HomeModule } from './module/home/home.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    TemplateModule,
    HomeModule
  ],
  providers: [{
    provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl(),
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
