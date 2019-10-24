import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Institucional',
      url: '/Institucional',
      icon: 'document'
    },
    {
      title: 'Tarifas y Horarios',
      url: '/Tarifas y Horarios',
      icon: 'cash'
    },
    {
      title: 'Parqueadero',
      url: '/Parqueadero',
      icon: 'bus'
    },
    {
      title: 'Cerrar Sesion',
      url: '/Cerrar Sesion',
      icon: 'tablet-portrait'
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
