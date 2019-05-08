import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Nelmiofrigo } from './Nelmiofrigo.page';

const routes: Routes = [
  {
    path: '',
    component: Nelmiofrigo
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Nelmiofrigo]
})
export class NelMioFrigoModule {}
