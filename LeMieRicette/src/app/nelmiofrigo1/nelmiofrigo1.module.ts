import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';

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
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Nelmiofrigo1Page]
})
export class Nelmiofrigo1PageModule {}
