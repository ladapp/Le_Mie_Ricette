import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {HttpClientModule, HttpClient} from '@angular/common/http';

import {IonicStorageModule} from '@ionic/storage';
import {TranslateModule} from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { InfoPage } from './info.page';



const routes: Routes = [
  {
    path: '',
    component: InfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    IonicStorageModule.forRoot(),
    TranslateModule
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
