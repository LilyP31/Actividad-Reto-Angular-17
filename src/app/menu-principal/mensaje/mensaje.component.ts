import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit{

  constructor(private rutaActiva: ActivatedRoute){}

  nuevoFormulario: any[]=[];
  
  ngOnInit(){
    this.nuevoFormulario = this.rutaActiva.snapshot.params['nuevoFormulario']; 
    this.nuevoFormulario = JSON.parse(this.rutaActiva.snapshot.params['nuevoFormulario'])                                                                             // llamo al parametro que sera enviado y sera almaccenado en cat
  } 
}
