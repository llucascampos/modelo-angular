import { Component, OnInit } from '@angular/core';
import { OfertaService} from '../oferta.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertaService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]
  //

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    // this.ofertas = this.ofertaService.getOfertas()
    // console.log(this.ofertas)

    this.ofertaService.getOfertas()
    .then((ofertas: Oferta[]) => { this.ofertas = ofertas }, // se deu certo
     
    ).catch(( param: any ) =>{
       console.log(param) // se retornou erro
    })

  }

}
