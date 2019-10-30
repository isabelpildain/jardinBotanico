import {Component} from '@angular/core';
import {ParseProviderService} from '../parse-provider.service';
import {PortafolioInterface} from '../../interfaces/PortafolioInterface';
@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  itemsPortafolios: PortafolioInterface[]  = [];

    constructor(private parseProvider: ParseProviderService) {
      this.listPortafolio();
    }

    public listPortafolio(): Promise<any> {
        const offset = this.itemsPortafolios.length;
        const limit = 10;
        return this.parseProvider.getItemsPortafolios(offset, limit).then((result) => {
            for (const item of result) {
              this.itemsPortafolios.push(item);
            }
        }, (error) => {
            console.log(error);
        });
    }

}
