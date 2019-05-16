import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'profilo', loadChildren: './profilo/profilo.module#ProfiloPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'dettaglio', loadChildren: './dettaglio/dettaglio.module#DettaglioPageModule' },
  { path: 'strumenti', loadChildren: './strumenti/strumenti.module#StrumentiPageModule' },
  { path: 'cerca', loadChildren: './cerca/cerca.module#CercaPageModule' },
  { path: 'aggiungi-ricetta', loadChildren: './aggiungi-ricetta/aggiungi-ricetta.module#AggiungiRicettaPageModule' },
  { path: 'nelmiofrigo1', loadChildren: './nelmiofrigo1/nelmiofrigo1.module#Nelmiofrigo1PageModule' },
  { path: 'le-mie-ricette', loadChildren: './le-mie-ricette/le-mie-ricette.module#LeMieRicettePageModule' },
  { path: 'ricette-dal-mio-frigo', loadChildren: './ricette-dal-mio-frigo/ricette-dal-mio-frigo.module#RicetteDalMioFrigoPageModule' },
 
     
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



