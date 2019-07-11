import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConvertitoreModalPage } from './convertitore-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertitoreModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConvertitoreModalPage]
})
export class ConvertitoreModalPageModule {}
