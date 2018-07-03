import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetcatalogoService } from '../services/getcatalogo.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {


  constructor(private http: HttpClient, private _getCatalogoService: GetcatalogoService) {}

  public inmuebles = [];

  //se ejecuta a penas inicia la carga del componente
  ngOnInit() {
  	
   this.getinmuebles();     
  }

  /**
   * se ejecuta luego del cambio de una directiva o variable
   */
  ngDoCheck(){
  	if (this.inmuebles == null) {
		this.getinmuebles();
  	}
  }

  /**
   * devuelve TODOS los inmuebles
   */
  public  getinmuebles(){
  	this.inmuebles = this._getCatalogoService.get();
  }


}
