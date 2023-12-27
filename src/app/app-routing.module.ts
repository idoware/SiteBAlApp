import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'escaneo-usuario',
    loadChildren: () => import('./modals/escaneo-usuario/escaneo-usuario.module').then( m => m.EscaneoUsuarioPageModule)
  },  {
    path: 'acciones',
    loadChildren: () => import('./acciones/acciones.module').then( m => m.AccionesPageModule)
  },
  {
    path: 'actividades',
    loadChildren: () => import('./modals/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'movimientos',
    loadChildren: () => import('./modals/movimientos/movimientos.module').then( m => m.MovimientosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
