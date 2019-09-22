import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'
import { OfertaService} from '../oferta.service'

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertaService]
})
export class DiversaoComponent implements OnInit {
  
  public ofertas: Oferta[]
  constructor(public ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertaPorCategoria('diversao')
    .then((ofertas: Oferta[])=>{
      
      this.ofertas = ofertas
      console.log(this.ofertas)
    })
  }

}
