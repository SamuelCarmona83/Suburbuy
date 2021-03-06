import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AgmCoreModule} from '@agm/core';
import { AgmCoreModule } from '@agm/core';

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
import { ChartModule } from 'angular2-chartjs';

import { PostService } from './registrar/post.service';
import { GetcatalogoService } from './services/getcatalogo.service';

import { RequerimientosComponent } from './requerimientos/requerimientos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariobarComponent } from './usuariobar/usuariobar.component';
import { AdminbarComponent } from './adminbar/adminbar.component';
import { AmigosbarComponent } from './amigosbar/amigosbar.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { VistoadminbarComponent } from './vistoadminbar/vistoadminbar.component';
import { AgregarclienteComponent } from './agregarcliente/agregarcliente.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PerfilclienteComponent } from './perfilcliente/perfilcliente.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';



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
    PerfilComponent,
    UsuariobarComponent,
    AdminbarComponent,
    AmigosbarComponent,
    SolicitudesComponent,
    VistoadminbarComponent,
    AgregarclienteComponent,
    FavoritosComponent,
    PerfilclienteComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHxwBdfUj3m-O5-VPy2BWCkrgHglrRH4E',
      libraries:["places"] }),
    ChartModule,
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
      { path: 'Perfil', component: PerfilComponent },
      { path: 'Solicitudes', component: SolicitudesComponent },
      { path: 'Addclientes', component: AgregarclienteComponent },
      { path: 'Favoritos', component: FavoritosComponent },
      { path: 'Cliente', component: PerfilclienteComponent },
      { path: 'Estadisticas', component: EstadisticasComponent }, 
      ])
  ],
  providers: [PostService,GetcatalogoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
