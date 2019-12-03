import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private menu: MenuController, private browser:InAppBrowser) {
  }
  
 
  openUrl1(  ){    
    this.browser.create('https://www.facebook.com/JardinBotanicoMedellin/','_self')
  }
  openUrl2(  ){    
    this.browser.create('https://www.instagram.com/jardinbotanicodemedellin/','_self')
  }
  openUrl3(  ){    
    this.browser.create('https://www.linkedin.com/company/jardin-botanico-de-medell%C3%ADn-joaquin-antonio-uribe/','_self')
  }
  openUrl4(  ){    
    this.browser.create('https://twitter.com/jbotanicomed?ref_src=twsrc%5Etfw&ref_url=https%3A%2F%2Fwww.botanicomedellin.org%2F','_self')
  }
  openUrl5(  ){    
    this.browser.create('https://www.youtube.com/user/jbotanicomed','_self')
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
}