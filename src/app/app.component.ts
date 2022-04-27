// app.component.ts
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {MenuController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  activePageTitle = 'Dashboard';
  Pages = [
    {
      title: 'الصفحة الأولى',
      url: '',
      icon: 'albums'
    },
    {
      title: 'تسجيل الدخول',
      url: '/psignin',
      icon: 'person'
    },
    {
      title: 'Register',
      url: '/psignup',
      icon: 'person'
    }
  ];
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private menu: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  gosignin() {
    this.router.navigate(['/psignin']);
  }
  toggleMenu() {
    this.menu.toggle();
  }
}