import {Component, NgZone} from '@angular/core';
import {ParseProviderService} from '../parse-provider.service';
import {PortafolioInterface} from '../../interfaces/PortafolioInterface';
import {NavigationExtras, Router} from '@angular/router';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  itemsPortafolios: PortafolioInterface[]  = [];

    constructor(private parseProvider: ParseProviderService, private route: Router, private ngZone: NgZone) {
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

    public enviarPortafolioVista(item: any) {
        const navigationE: NavigationExtras = {
            queryParams: {
                item: JSON.stringify(item)
            }
        }
        this.ngZone.run(() => this.route.navigate(['portafolio-vista'], navigationE)).then();
    }

}
