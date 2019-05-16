import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  

  constructor(public router:Router) {}


   ngOnInit(){

   }
   
  vai(){
    this.router.navigate(['/login'])
  }

  dettaglio(){
    this.router.navigate(['/dettaglio'])
  }

  
  //Rotte per la tab-bar
  mieRicetteTab(){
    this.router.navigate(['/le-mie-ricette'])
  }

  homeTab(){
    this.router.navigate(['/home'])
  }

  aggiungiTab(){
    this.router.navigate(['/aggiungi-ricetta'])
  }

  frigoTab(){
    this.router.navigate(['/nelmiofrigo1'])
  }

  strumentiTab(){
    this.router.navigate(['/strumenti'])
  }


}
