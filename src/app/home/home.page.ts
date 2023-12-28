import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  AlertController,
  ToastController,
  NavController,
} from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { EscaneoUsuarioPage } from '../modals/escaneo-usuario/escaneo-usuario.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  scannedText: any;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private toastCtrl: ToastController,
    private navController: NavController,
    private barcodeScanner: BarcodeScanner,
  ) {}

  ngOnInit() {
    console.log("no se como quitarlo");
  }

  scanQR() {
    this.barcodeScanner.scan().then(barcodeData => {
      // Se ejecuta después de que se escanea el código de barras
      if (!barcodeData.cancelled) {
        // Aquí puedes acceder al texto del código QR escaneado
        const scannedText = barcodeData.text;
        console.log('Texto escaneado:', scannedText);

        // Puedes mostrar el texto escaneado en la interfaz de usuario
        // (por ejemplo, asignándolo a una variable que se muestre en tu plantilla HTML)
        this.scannedText = scannedText;
      } else {
        console.log('Escaneo cancelado');
      }
    }).catch(err => {
      // Manejar errores
      console.error('Error en el escaneo:', err);
    });
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
