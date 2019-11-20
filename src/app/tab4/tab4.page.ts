import { Component } from '@angular/core';
import {ServicioInterface} from '../../interfaces/ServicioInterface';
import {ParseProviderService} from '../parse-provider.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  itemsServicios: ServicioInterface[] = [];
 

  constructor(private parseProvider: ParseProviderService, private iab: InAppBrowser) {
    this.listServicios();
  }
  openUrl(){
    // this.browser.create('https://www.botanicomedellin.org/servicios/ciencia-y-biodiversidad/silvicultura-y-paisajismo/', '_self')
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
