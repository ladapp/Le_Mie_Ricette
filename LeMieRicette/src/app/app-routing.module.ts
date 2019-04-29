import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomePageModule'},
  {path: 'list', loadChildren: './list/list.module#ListPageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'profilo', loadChildren: './profilo/profilo.module#ProfiloPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'dettaglio', loadChildren: './dettaglio/dettaglio.module#DettaglioPageModule' },
  { path: 'strumenti', loadChildren: './strumenti/strumenti.module#StrumentiPageModule' },
  { path: 'cerca', loadChildren: './cerca/cerca.module#CercaPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
