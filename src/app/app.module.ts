import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalModule } from './menu-principal/menu-principal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuPrincipalModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
