import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';

class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.page.html',
  styleUrls: ['./aggiungi.page.scss'],
})



export class AggiungiPage implements OnInit {
  ports: Port[];
  port: Port;
 
 
constructor(public router:Router){  
  this.ports = [
    { id: 1, name: 'Piselli' },
    { id: 2, name: 'Zucchero' },
    { id: 4, name: 'Sale' },
    { id: 5, name: 'Pepe' },
    { id: 6, name: 'Limone' },
    { id: 7, name: 'Salmone' },
    { id: 8, name: 'Burro' },
    { id: 9, name: 'Pasta' },
    { id: 10, name: 'Pomodori' },
    { id: 11, name: 'Finocchi' },
    { id: 12, name: 'Rosmarino' }
  ];
}
   

  ngOnInit() {
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('ingrediente:', event.value);
  }

}
