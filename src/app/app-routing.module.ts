import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesPath } from './global/routes-path';
import { HomeComponent } from './module/home/home.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: '', redirectTo: RoutesPath.HOME, pathMatch: 'full' },
  // { path: RoutesPath.LOGIN, component: LoginComponent,
  //   // canActivate: [LoginGuard]
  // },
  {
    path: '',
    component: TemplateComponent,
    // canActivate: [AuthorizatedGuard],
    children: [
      {
        path: RoutesPath.HOME,
        component: HomeComponent,
      },
      //#region "CONTROL ACCESO"
      // {
      //   path: RoutesPath.USUARIO,
      //   // canActivate: [AuthorizatedGuard],
      //   loadChildren: () =>
      //     import('./module/usuario/usuario.module').then(
      //       (m) => m.UsuarioModule,
      //     ),
      // },
      {
        path: RoutesPath.TIPO_CAMBIO,
        // canActivate: [AuthorizatedGuard],
        loadChildren: () =>
          import('./module/tipo-cambio/tipo-cambio.module').then(
            (m) => m.TipoCambioModule,
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
