import { Component } from '@angular/core';
import {ServicioInterface} from '../../interfaces/ServicioInterface';
import {ParseProviderService} from '../parse-provider.service';
<<<<<<< HEAD
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
=======
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
>>>>>>> 191ad1bffb4e602997960cfc91458093cbc3724d

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  itemsServicios: ServicioInterface[] = [];

<<<<<<< HEAD
  constructor(private parseProvider: ParseProviderService, private iab: InAppBrowser) {
=======
  constructor(private parseProvider: ParseProviderService, private browser: InAppBrowser) {
>>>>>>> 191ad1bffb4e602997960cfc91458093cbc3724d
    this.listServicios();
  }
  openUrl(){
    this.browser.create('https://www.botanicomedellin.org/servicios/ciencia-y-biodiversidad/silvicultura-y-paisajismo/', '_self')
  }

  public listServicios(): Promise<any> {
    const offset = this.itemsServicios.length;
    const limit = 10;
    return this.parseProvider.getItemsServicios(offset, limit).then((result) => {
      for (const item of result) {
        this.itemsServicios.push(item);
      }
    }, (error) => {
      console.log(error);
    });
  }
  openUrl(){
    this.iab.create('https://yofasele.sirv.com/Images/jardinbotanico/Portafolios_digitales_JBM_2019_/Artes%20Portafolio%201%20Silvicultura%20y%20Paisajismo%20DIGITAL.pdf','_self')
  }
}
