import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-escaneo-usuario',
  templateUrl: './escaneo-usuario.page.html',
  styleUrls: ['./escaneo-usuario.page.scss'],
})
export class EscaneoUsuarioPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    console.log("no se como quitarlo");
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
