import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListaamigosComponent } from './listaamigos/listaamigos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AddinmuebleComponent } from './addinmueble/addinmueble.component';
import { ProfinmuebleComponent } from './profinmueble/profinmueble.component';
import { FriendsComponent } from './friends/friends.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MisInmueblesComponent } from './mis-inmuebles/mis-inmuebles.component';
import { PostService } from './registrar/post.service';
import { RequerimientosComponent } from './requerimientos/requerimientos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrarComponent,
    ListaamigosComponent,
    CatalogoComponent,
    AddinmuebleComponent,
    ProfinmuebleComponent,
    FriendsComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    MisInmueblesComponent,
    RequerimientosComponent,
    ClientesComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'Registro', component: RegistrarComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'Amigos', component: ListaamigosComponent },
      { path: 'Catalogo', component: CatalogoComponent },
      { path: 'Publicar', component: AddinmuebleComponent },
      { path: 'Publicacion', component: ProfinmuebleComponent },
      { path: 'Red', component: FriendsComponent },
      { path: 'MisInmuebles', component: MisInmueblesComponent },
      { path: 'Clientes', component: ClientesComponent },
      { path: 'Perfil', component: PerfilComponent }
      ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
