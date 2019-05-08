import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalcolatriceModalPage } from './calcolatrice-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CalcolatriceModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalcolatriceModalPage]
})
export class CalcolatriceModalPageModule {}
