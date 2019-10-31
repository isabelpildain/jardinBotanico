import { Component, OnInit } from '@angular/core';
import {institucionalInterface} from '../../interfaces/institucionalInterface'; 
import {ParseProviderService} from '../parse-provider.service';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.page.html',
  styleUrls: ['./institucional.page.scss'],
})
export class InstitucionalPage implements OnInit {

  itemsInstitucional: institucionalInterface[] = []
  ;
  constructor(private parseProvider: ParseProviderService) {
    this.listInstitucional();
  }  


  public listInstitucional(): Promise<any> {
    const offset = this.itemsInstitucional.length;
    const limit = 10;
    return this.parseProvider.getItemsInstitucional(offset, limit).then((result) => {
      for (const item of result) {
        this.itemsInstitucional.push(item);
      }
    }, (error) => {
      console.log(error);
    });
  }
ngOnInit() {}
}

