import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'
import { OfertaService} from '../oferta.service'

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  providers: [OfertaService]
})
export class RestauranteComponent implements OnInit {

  public ofertas: Oferta[]
  constructor(public ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertaPorCategoria('restaurante')
    .then((ofertas: Oferta[])=>{
      
      this.ofertas = ofertas
      console.log(this.ofertas)
    })
  }

}