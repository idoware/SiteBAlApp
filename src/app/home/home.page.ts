import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  AlertController,
  ToastController,
} from '@ionic/angular';
import { EscaneoUsuarioPage } from '../modals/escaneo-usuario/escaneo-usuario.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    console.log("no se como quitarlo");
  }

  async escaneoUsuario(){
    const modal = await this.modalController.create({
      component: EscaneoUsuarioPage,
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
