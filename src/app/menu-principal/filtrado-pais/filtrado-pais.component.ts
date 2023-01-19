import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtrado-pais',
  templateUrl: './filtrado-pais.component.html',
  styleUrls: ['./filtrado-pais.component.css']
})
export class FiltradoPaisComponent  implements OnInit{

  constructor(private rutaActiva: ActivatedRoute){}

  nuevoFiltrado: any[]= [];

  ngOnInit(){
    
    this.nuevoFiltrado = JSON.parse(this.rutaActiva.snapshot.params['nuevoFiltrado'])                                                                             // llamo al parametro que sera enviado y sera almaccenado en cat
  } 

}
