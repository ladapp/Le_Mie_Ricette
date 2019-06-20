import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path:'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path:'le-mie-ricette',
        loadChildren: '../le-mie-ricette/le-mie-ricette.module#LeMieRicettePageModule'
      },
      {
        path:'aggiungi-ricetta',
        loadChildren: '../aggiungi-ricetta/aggiungi-ricetta.module#AggiungiRicettaPageModule'
      },
      {
        path:'nelmiofrigo1',
        loadChildren: '../nelmiofrigo1/nelmiofrigo1.module#Nelmiofrigo1PageModule'
      },
      {
        path:'strumenti',
        loadChildren: '../nelmiofrigo1/nelmiofrigo1.module#Nelmiofrigo1PageModule'
      },
      {
        path:'profilo',
        loadChildren: '../profilo/profilo.module#ProfiloPageModule' 
      },
      {
        path:'info',
        loadChildren: '../info/info.module#InfoPageModule'
      },
      {
        path:'cerca',
        loadChildren: '../cerca/cerca.module#CercaPageModule'
      },
      {
        path:'aggiungi-ricetta',
        loadChildren: '../aggiungi-ricetta/aggiungi-ricetta.module#Aggiungi-ricettaPageModule'
      },
      {
        path:'ricette-dal-mio-frigo',
        loadChildren: '../ricette-dal-mio-frigo/ricette-dal-mio-frigo.module#RicetteDalMioFrigoPageModule'
      },
      {
        path:'dettaglio',
        loadChildren: '../dettaglio/dettaglio.module#DettaglioPageModule'
      },      
    ]
  },
  {
    path:'',
    redirectTo:'tabs/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
