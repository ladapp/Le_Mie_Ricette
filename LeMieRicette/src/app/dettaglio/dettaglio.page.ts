import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.page.html',
  styleUrls: ['./dettaglio.page.scss'],
})
export class DettaglioPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/home']);
  }

}
