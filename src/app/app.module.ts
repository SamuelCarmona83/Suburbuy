import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListaamigosComponent } from './listaamigos/listaamigos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AddinmuebleComponent } from './addinmueble/addinmueble.component';
import { ProfinmuebleComponent } from './profinmueble/profinmueble.component';
import { FriendsComponent } from './friends/friends.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrarComponent,
    ListaamigosComponent,
    CatalogoComponent,
    AddinmuebleComponent,
    ProfinmuebleComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
