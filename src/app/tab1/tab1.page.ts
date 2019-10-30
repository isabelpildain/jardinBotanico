import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {inicioInterface} from '../../interfaces/inicioInterface'; 
import {ParseProviderService} from '../parse-provider.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

    itemsInicio: inicioInterface[] = [];

    constructor(private parseProvider: ParseProviderService) {
      this.listInicio();
    }

    public listInicio(): Promise<any> {
      const offset = this.itemsInicio.length;
      const limit = 10;
      return this.parseProvider.getItemsInicio(offset, limit).then((result) => {
        for (const item of result) {
          this.itemsInicio.push(item);
        }
      }, (error) => {
        console.log(error);
      });
    }

}