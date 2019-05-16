import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { IonicSelectableModule } from 'ionic-selectable';

import { AggiungiRicettaPage } from './aggiungi-ricetta.page';



const routes: Routes = [
  {
    path: '',
    component: AggiungiRicettaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicSelectableModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AggiungiRicettaPage]
})
export class AggiungiRicettaPageModule {}
