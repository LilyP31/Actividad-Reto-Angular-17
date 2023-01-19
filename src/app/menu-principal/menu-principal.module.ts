import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FiltradoPaisComponent } from './filtrado-pais/filtrado-pais.component';


@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    MensajeComponent,
    MenuComponent,
    FiltradoPaisComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ContactoComponent,
    HomeComponent,
    MensajeComponent,
    NosotrosComponent,
    MenuComponent,
    FiltradoPaisComponent

  ],
})
export class MenuPrincipalModule { }
