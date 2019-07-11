import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalcolatriceModalPage } from '../calcolatrice-modal/calcolatrice-modal.page';
import { TimerModalPage } from '../timer-modal/timer-modal.page';
import { ConvertitoreModalPage } from '../convertitore-modal/convertitore-modal.page';


@Component({
  selector: 'app-strumenti',
  templateUrl: './strumenti.page.html',
  styleUrls: ['./strumenti.page.scss'],
})
export class StrumentiPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

    async showCalculator(){
      const modal= await this.modalController.create({
        component: CalcolatriceModalPage
      });

      await modal.present();
    }

    async showTimer(){
      const modal= await this.modalController.create({
        component: TimerModalPage
      });

      await modal.present();
    }

    async showConvertitore(){
      const modal= await this.modalController.create({
        component: ConvertitoreModalPage
      });

      await modal.present();
    }
 

}
