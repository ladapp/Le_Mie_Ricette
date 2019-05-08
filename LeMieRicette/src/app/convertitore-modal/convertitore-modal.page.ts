import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-convertitore-modal',
  templateUrl: './convertitore-modal.page.html',
  styleUrls: ['./convertitore-modal.page.scss'],
})
export class ConvertitoreModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }
}
