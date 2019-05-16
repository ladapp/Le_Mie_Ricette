import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeMieRicettePage } from './le-mie-ricette.page';

const routes: Routes = [
  {
    path: '',
    component: LeMieRicettePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeMieRicettePage]
})
export class LeMieRicettePageModule {}
