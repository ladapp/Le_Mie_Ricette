import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Ricetta} from '../model/ricetta.model';
import {RicettaService} from '../services/ricetta.service';

@Component({
  selector: 'app-le-mie-ricette',
  templateUrl: './le-mie-ricette.page.html',
  styleUrls: ['./le-mie-ricette.page.scss'],
})
export class LeMieRicettePage implements OnInit {

  private ricette$: Observable<Ricetta[]>;

  constructor(private ricettaService: RicettaService) { }

  ngOnInit() {
    this.ricette$ = this.ricettaService.list();
  }

}
