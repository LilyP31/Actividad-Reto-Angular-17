import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  contactForm: FormGroup;
  nuevoFormulario: any[]=[];
  filtradoporPais : string = "";
  
 
  datosFiltrados: any[]=[];
  
  constructor(private formbuilder: FormBuilder, private router: Router) { 
    
    this.contactForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      paises:['', [Validators.required]],
      
      sujeto: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required,Validators.minLength(5)]]
    });
  }
  
  ngOnInit(): void {
    
  }
  
  get name(){ return this.contactForm.get('name'); }
  get email(){ return this.contactForm.get('email'); }
  get telephone(){ return this.contactForm.get('telephone'); }
  get paises(){ return this.contactForm.get('paises'); }
  get sujeto(){ return this.contactForm.get('sujeto'); }
  get message(){ return this.contactForm.get('message'); }

  onSubmit(){
    this.nuevoFormulario.push({

      name: this.contactForm.get('name')?.value,
      email: this.contactForm.get('email')?.value,
      telephone: this.contactForm.get('telephone')?.value,
      paises: this.contactForm.get('paises')?.value,
      sujeto: this.contactForm.get('sujeto')?.value,
      message: this.contactForm.get('message')?.value,
      });
      this.contactForm.reset();
  }

    EnviarDatos(){
      this.router.navigate(['/Contacto/', JSON.stringify(this.nuevoFormulario)]);
  }

    FiltradoporPais(datos:any[], paises :string){
      return datos.filter(item => item.paises === paises )
    }

    Filtrado(){
      this.datosFiltrados = this.FiltradoporPais(this.nuevoFormulario,this.filtradoporPais)
      this.router.navigate(['/Filtradopais',JSON.stringify(this.datosFiltrados)]);
    }

}
//this.contactForm.push(this.nuevoFormulario);
//this.nuevoFormulario = {name: '', email: '', password: '',telephone: '',paises: '',sujeto: '',message: ''};
//;