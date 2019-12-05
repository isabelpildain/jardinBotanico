import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Parse} from 'parse';
import {ENV} from '../app/app.constant';
import {PortafolioInterface} from '../interfaces/PortafolioInterface';
import {ServicioInterface} from '../interfaces/ServicioInterface';
import {inicioInterface} from '../interfaces/inicioInterface';
import {institucionalInterface} from '../interfaces/institucionalInterface';
import {restauranteInterface} from '../interfaces/restauranteInterface';
import {cursosInterface} from '../interfaces/cursosInterface';
import {eventosInterface} from '../interfaces/eventosInterface';
import {usuarioInterface} from '../interfaces/usuarioInterface';




@Injectable({
    providedIn: 'root'
})
export class ParseProviderService {

    private parseAppId: string = ENV.parseAppId;
    private parseServerUrl: string = ENV.parseServerUrl;

    constructor() {
        this.parseInitialize();
    }

    public getItemsMarcadores(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const marcadores: any[] = Parse.Object.extend('mapa_marcadores');
                const query = new Parse.Query(marcadores);
                query.find().then((item) => {
                    resolve(item);
                }, (error) => {
                    reject(error);
                });
            }, 500);
        });
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
                const objetosinicio: inicioInterface[] = Parse.Object.extend('Noticias');
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
    public getItemsInstitucional(offset: number = 0, limit: number = 3): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const institucional: institucionalInterface[] = Parse.Object.extend('institucional');
                const query = new Parse.Query(institucional);
                query.skip(offset);
                query.limit(limit);
                query.find().then((ItemsInstitucional) => {
                    resolve(ItemsInstitucional);
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

    public getItemsrestaurante(offset: number = 0, limit: number = 3): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const restaurantes: restauranteInterface[] = Parse.Object.extend('restaurantes');
                const query = new Parse.Query(restaurantes);
                query.skip(offset);
                query.limit(limit);
                query.find().then((itemsrestaurante) => {
                    resolve(itemsrestaurante);
                }, (error) => {
                    reject(error);
                });
            }, 500);
        });
    }

    public getItemscursos(offset: number = 0, limit: number = 3): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const cursos: cursosInterface[] = Parse.Object.extend('cursos');
                const query = new Parse.Query(cursos);
                query.skip(offset);
                query.limit(limit);
                query.find().then((itemscursos) => {
                    resolve(itemscursos);
                }, (error) => {
                    reject(error);
                });
            }, 500);
        });
    }

    public getItemseventos(offset: number = 0, limit: number = 3): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const eventos: eventosInterface[] = Parse.Object.extend('eventos');
                const query = new Parse.Query(eventos);
                query.skip(offset);
                query.limit(limit);
                query.find().then((itemseventos) => {
                    resolve(itemseventos);
                }, (error) => {
                    reject(error);
                });
            }, 500);
        });
    }

    public getlogin (email: String, password: String) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const usuario: usuarioInterface[] = Parse.Object.extend('usuarios');
                const query = new Parse.Query(usuario);
                query.equalTo('email',email);
                query.first().then((itemslogin) => {
                    resolve(itemslogin);
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
