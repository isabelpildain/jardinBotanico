import {Component} from '@angular/core';
import {ParseProviderService} from '../parse-provider.service';
import {PortafoliosInteface} from '../../interfaces/portafolioInterface';
@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  itemsPortafolios: PortafoliosInteface[]  = [];

    constructor(private parseProvider: ParseProviderService) {
      this.listPortafolio();
    }

    public listPortafolio(): Promise<any> {
        const offset = this.itemsPortafolios.length;
        const limit = 10;
        return this.parseProvider.getItemsPortafolio(offset, limit).then((result) => {
            for (const item of result) {
              this.itemsPortafolios.push(item);
            }
        }, (error) => {
            console.log(error);
        });
    }

}
