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




  ngOnInit() {
     this.getinmuebles();
    	for (var i = 0; i < this.inmuebles.length; ++i) {
    		console.log(this.inmuebles[i]);
    	}
  }


  public async getinmuebles(){

  	this.inmuebles = await this._getCatalogoService.get();
    console.log(this.inmuebles);

  }


}
