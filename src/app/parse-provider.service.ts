import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Parse} from 'parse';
import {ENV} from '../app/app.constant';
import {PortafolioInterface} from '../interfaces/PortafolioInterface';
import {ServicioInterface} from '../interfaces/ServicioInterface';
import {inicioInterface} from '../interfaces/inicioInterface';


@Injectable({
    providedIn: 'root'
})
export class ParseProviderService {

    private parseAppId: string = ENV.parseAppId;
    private parseServerUrl: string = ENV.parseServerUrl;

    constructor() {
        this.parseInitialize();
    }

    public getItemsPortafolios(offset: number = 0, limit: number = 3): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const portafolios: PortafolioInterface[] = Parse.Object.extend('portafolios');
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

    public getItemsServicios(offset: number = 0, limit: number = 3): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const servicios: ServicioInterface[] = Parse.Object.extend('servicios');
                const query = new Parse.Query(servicios);
                query.skip(offset);
                query.limit(limit);
                query.find().then((itemsServicios) => {
                    resolve(itemsServicios);
                }, (error) => {
                    reject(error);
                });
            }, 500);
        });
    }
    public getItemsInicio(offset: number = 0, limit: number = 3): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const objetosinicio: inicioInterface[] = Parse.Object.extend('objetosinicio');
                const query = new Parse.Query(objetosinicio);
                query.skip(offset);
                query.limit(limit);
                query.find().then((itemsInicio) => {
                    resolve(itemsInicio);
                }, (error) => {
                    reject(error);
                });
            }, 500);
        });
    }

    public async getItemPlantasArticulo(id: string): Promise<any> {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                const articulo = Parse.Object.extend('plantas_articulos');
                const query = new Parse.Query(articulo);
                query.get(id).then((item) => {
                    resolve(item);
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
