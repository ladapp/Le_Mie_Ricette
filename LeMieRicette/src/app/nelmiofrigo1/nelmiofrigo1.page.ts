import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Router } from '@angular/router';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-nelmiofrigo1',
  templateUrl: './nelmiofrigo1.page.html',
  styleUrls: ['./nelmiofrigo1.page.scss'],
})
export class Nelmiofrigo1Page implements OnInit {

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
