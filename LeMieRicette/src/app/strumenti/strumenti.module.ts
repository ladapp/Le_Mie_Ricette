import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StrumentiPage } from './strumenti.page';
import { CalcolatriceModalPage } from '../calcolatrice-modal/calcolatrice-modal.page';
import { TimerModalPage } from '../timer-modal/timer-modal.page';
import { ConvertitoreModalPage } from '../convertitore-modal/convertitore-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StrumentiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StrumentiPage, CalcolatriceModalPage, TimerModalPage, ConvertitoreModalPage],
  entryComponents: [CalcolatriceModalPage, TimerModalPage, ConvertitoreModalPage]
})
export class StrumentiPageModule {}
