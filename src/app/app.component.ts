import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      title: 'Login',
      url: '/login',
      icon: 'md-log-in'
    },
    {
      title: 'Sign up',
      url: '/signup',
      icon: 'md-person-add'
    },
    {
      title: 'Profil',
      url: '/profil',
      icon: 'md-contact'
    } ,
    {
      title: 'Ads',
      url: '/list',
      icon: 'list'
    } ,
    {
      title: 'Log Out',
      url: '/home',
      icon: 'md-log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
