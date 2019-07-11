import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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

  result1: number;
  result2: number;
  
  convertKg(numero1: number){
    let num: number;
    num = numero1 * 1000;
    this.result1 = num;
  }
  convertgr(numero2: number){
    let num: number;
    num = numero2 / 1000;
    this.result2 = num;
  }
}
