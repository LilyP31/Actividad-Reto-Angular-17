import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './menu-principal/contacto/contacto.component';
import { FiltradoPaisComponent } from './menu-principal/filtrado-pais/filtrado-pais.component';
import { HomeComponent } from './menu-principal/home/home.component';
import { MensajeComponent } from './menu-principal/mensaje/mensaje.component';
import { NosotrosComponent } from './menu-principal/nosotros/nosotros.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Nosotros', component: NosotrosComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: 'Mensaje', component: MensajeComponent},
  {path: 'Contacto/:nuevoFormulario', component: MensajeComponent},
  {path: 'Filtradopais/:nuevoFiltrado', component: FiltradoPaisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
