import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private menu: MenuController, private browser:InAppBrowser) {}
  
  redes: any = [

    {
      url:'https://www.facebook.com/JardinBotanicoMedellin/'
    },
    {
      url:'https://www.instagram.com/jardinbotanicodemedellin/'
    },
    {
      url:'https://www.linkedin.com/company/jardin-botanico-de-medell%C3%ADn-joaquin-antonio-uribe/'
    },
    {
      url:'https://twitter.com/jbotanicomed?ref_src=twsrc%5Etfw&ref_url=https%3A%2F%2Fwww.botanicomedellin.org%2F'
    },
    {
      url:'https://www.youtube.com/user/jbotanicomed'
    }
  ];

  openUrl( url:string, target:string ){
    const link = url
    this.browser.create(link,target)
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

<<<<<<< HEAD
=======
}

export class Refresher {
  constructor() {}

  doRefresh(event) {

    setTimeout(() => {
      event.target.complete();
    }, 800);
  }
>>>>>>> cea4653a6f732f1c8fc3405bff526ef1cd425534
}