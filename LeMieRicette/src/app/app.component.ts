import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private menu: MenuController,
    private translate: TranslateService  
  ) {
    this.initializeApp();
    translate.setDefaultLang('it');
  }

  switchLanguage(language:string){
    this.translate.use(language);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  login(){
    this.router.navigate(['/login']);
    this.menu.close();
  }

  profilo(){
    this.router.navigate(['/profilo']);
    this.menu.close();
  }

  info(){
    this.router.navigate(['/info']);
    this.menu.close();
  }
}
