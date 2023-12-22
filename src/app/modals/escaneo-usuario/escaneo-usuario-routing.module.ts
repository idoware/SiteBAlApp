import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscaneoUsuarioPage } from './escaneo-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: EscaneoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscaneoUsuarioPageRoutingModule {}
