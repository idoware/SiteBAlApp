import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  AlertController,
  ToastController,
  NavController,
} from '@ionic/angular';
import { ActividadesPage } from '../modals/actividades/actividades.page';
import { MovimientosPage } from '../modals/movimientos/movimientos.page';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.page.html',
  styleUrls: ['./acciones.page.scss'],
})
export class AccionesPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private toastCtrl: ToastController,
    private navController: NavController,
  ) {}

  ngOnInit() {
    console.log("e");
  }

  async actividades(){
    const modal = await this.modalController.create({
      component: ActividadesPage,
      componentProps: {
        componentInstance: this
      }
    });
    return await modal.present();
  }

  async movimientos(){
    const modal = await this.modalController.create({
      component: MovimientosPage,
      componentProps: {
        componentInstance: this
      }
    });
    return await modal.present();
  }

  async mostrarToast(mensaje: string, colorToast: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 6000, // Duración en milisegundos
      position: 'bottom', // Posición del Toast: 'top', 'bottom', 'middle'
      color: colorToast, // Color del Toast: 'primary', 'secondary', 'success', 'warning', 'danger'
    });
    toast.present();
  }

}
