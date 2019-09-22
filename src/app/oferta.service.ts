import {Oferta} from './shared/oferta.model'
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core'


@Injectable()
export class OfertaService{

    constructor(private http: HttpClient) {}
  
    

    public getOfertas(): Promise<Array<Oferta>>{
        JSON
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta)
    } 
    
    public getOfertaPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta)
    }


    public getOfertaPorId(id: number):  Promise<Oferta>{
        return this.http.get(`http://localhost:3000/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta[0])
        
        
    }


}