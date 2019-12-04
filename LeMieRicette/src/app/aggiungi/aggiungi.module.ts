import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';

import { IonicSelectableModule } from 'ionic-selectable';


import { AggiungiPage } from './aggiungi.page';



const routes: Routes = [
  {
    path: '',
    component: AggiungiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicSelectableModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AggiungiPage]
})
export class AggiungiPageModule {}
