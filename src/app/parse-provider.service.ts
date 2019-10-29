import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Parse} from 'parse';
import {ENV} from '../app/app.constant';
import {PortafoliosInteface} from '../interfaces/portafolioInterface';


@Injectable({
    providedIn: 'root'
})
export class ParseProviderService {

    private parseAppId: string = ENV.parseAppId;
    private parseServerUrl: string = ENV.parseServerUrl;

    constructor() {
        this.parseInitialize();
        console.log('Initiated Parse');
    }

    public getItemsPortafolio(offset: number = 0, limit: number = 3): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const portafolios: PortafoliosInteface = Parse.Object.extend('portafolios');
                const query = new Parse.Query(portafolios);
                query.skip(offset);
                query.limit(limit);
                query.find().then((itemPortafolios) => {
                    resolve(itemPortafolios);
                }, (error) => {
                    reject(error);
                });
            }, 500);
        });
    }

    private parseInitialize() {
        Parse.initialize(this.parseAppId);
        Parse.serverURL = this.parseServerUrl;
    }

}
