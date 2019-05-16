import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';

import { Nelmiofrigo1Page } from './nelmiofrigo1.page';

const routes: Routes = [
  {
    path: '',
    component: Nelmiofrigo1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Nelmiofrigo1Page]
})
export class Nelmiofrigo1PageModule {}
