import { Component, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { advanceActivatedRoute } from '@angular/router/src/router_state';



@Component({
  selector: 'app-timer-modal',
  templateUrl: './timer-modal.page.html',
  styleUrls: ['./timer-modal.page.scss'],
})
export class TimerModalPage implements OnInit {

  public timer=0;
  public avviso = "";

  constructor(public modalController: ModalController ) { 
    //this.startTimer();
   }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

  startTimer(min: number, sec: number){
    //alert(min + " " + sec);
    var minuti: number = min;
    var secondi: number = sec;
    var tempo: number = (minuti*60) + secondi;
    this.timer = tempo;
   var intervalVar= setInterval(
     function(){
      if(this.timer == 0){
        this.avviso = "Tempo scaduto!";
        return(0);
      } else{
        this.timer--;
      }
      
    }.bind(this),1000)
  }
/*
  start(min: number, sec: number){
    var minuti: number = min * 60000;
    var secondi: number = sec * 1000;
    var tempo: number = minuti + secondi;
    this.avvia(tempo);
  }
  avvia(tempo: number){
    setTimeout(stop, tempo);
  }
  
  stop(){
    document.getElementById('output').innerHTML = "tempo scaduto";
  }*/

}
