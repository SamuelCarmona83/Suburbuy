import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetcatalogoService } from '../services/getcatalogo.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {


  constructor(private http: HttpClient, private _getCatalogoService: GetcatalogoService) { }

  ngOnInit() {

   this._getCatalogoService.get();
  }

}
