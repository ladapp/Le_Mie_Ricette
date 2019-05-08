import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-calcolatrice-modal',
  templateUrl: './calcolatrice-modal.page.html',
  styleUrls: ['./calcolatrice-modal.page.scss'],
})
export class CalcolatriceModalPage implements OnInit {

  constructor(public modalController: ModalController ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

  result = "";

  btnClicked(btn) {
    console.log('CalculatorPage::btnClicked = ' + btn);
    if (btn == "C") {
        this.result = "";
    } else if (btn == "=") {
        this.result = eval(this.result);
    } else if (btn == "squareroot") {
        this.result = Math.sqrt(eval(this.result)) + "";
    } else if (btn == "square") {
        this.result = eval("(" + this.result + ") * ( " + this.result + ")");
    } else if (btn == "reciproc") {
        this.result = eval(1 + "/ (" + this.result + ")");
    } else {
        this.result += btn;
    }
}
}
