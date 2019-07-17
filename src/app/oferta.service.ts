import {Oferta} from './shared/oferta.model'
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core'


@Injectable()
export class OfertaService{

    constructor(private http: HttpClient) {}
  
    

    public getOfertas(): Promise<Array<Oferta>>{
        return this.http.get('http://localhost:3000/ofertas')
            .toPromise()
            .then((resposta: any) => resposta)
    }   


}