import { Component, OnInit } from '@angular/core';
import {ParseProviderService} from '../parse-provider.service';
import {eventosInterface} from '../../interfaces/eventosInterface';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  itemseventos: eventosInterface[]  = [];

  constructor(private parseProvider: ParseProviderService) {
    this.listeventos();
   }

   public listeventos(): Promise<any> {
    const offset = this.itemseventos.length;
    const limit = 10;
    return this.parseProvider.getItemseventos(offset, limit).then((result) => {
        for (const eventos of result) {
          this.itemseventos.push(eventos);
        }
    }, (error) => {
        console.log(error);
    });
}

  ngOnInit() {
  }

}
