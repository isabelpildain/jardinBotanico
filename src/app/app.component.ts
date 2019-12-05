import { Component } from '@angular/core';
import { Environment } from '@ionic-native/google-maps/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  public appPages = [
    {
      title: 'Que hacer en el Jardin?',
      url: '/institucional',
      icon: 'md-cloudy-night'
    },
    {
      title: 'Horarios',
      url: '/tarifas-horarios',
      icon: 'md-clock'
    },
    {
      title: 'Parqueadero',
      url: '/parqueadero',
      icon: 'bus'
    },
    {
      title: 'Recomendaciones',
      url: '/recomendaciones',
      icon: 'md-checkmark-circle'
    },
    {
      title: 'Restaurantes',
      url: '/restaurantes',
      icon: 'md-beer'
    },
    {
      title: 'Espacios para eventos',
      url: '/eventos',
      icon: 'ios-contacts'
    }
  ];

  showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
     
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();

<<<<<<< HEAD
      timer(1000).subscribe(() => this.showSplash = false)
=======
      timer(2000).subscribe(() => this.showSplash = false)
>>>>>>> c3af09f08398db579335b7fd81c18b14914d6649

      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDGODufigYaWvP-Lg2nmzoRkKd3QbqUsR0',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDGODufigYaWvP-Lg2nmzoRkKd3QbqUsR0'
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
