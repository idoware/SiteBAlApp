import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscaneoUsuarioPageRoutingModule } from './escaneo-usuario-routing.module';

import { EscaneoUsuarioPage } from './escaneo-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscaneoUsuarioPageRoutingModule
  ],
  declarations: [EscaneoUsuarioPage]
})
export class EscaneoUsuarioPageModule {}
