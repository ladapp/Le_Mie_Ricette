import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-timer-modal',
  templateUrl: './timer-modal.page.html',
  styleUrls: ['./timer-modal.page.scss'],
})
export class TimerModalPage implements OnInit {

  public timer=0;

  constructor(public modalController: ModalController ) { 
    this.startTimer()
   }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

  startTimer(){
   var intervalVar= setInterval(function(){
      //alert(this.timer++);
      this.timer++;
    }.bind(this),1000)
  }

  

}
