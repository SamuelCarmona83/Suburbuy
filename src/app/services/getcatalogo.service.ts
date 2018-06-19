import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class GetcatalogoService {

  constructor(private http:HttpClient) { }

  get(){

  	this.http.get('https://apirest-suburbuy.herokuapp.com/inmuebles').subscribe(data => {
      console.log(data);
      return data;
    });
  }

}