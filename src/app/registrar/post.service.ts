import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()


export class PostService {



  constructor(private http:HttpClient) { }

  public url = 'https://apirest-suburbuy.herokuapp.com/users';
  get(){

  	this.http.get(this.url).subscribe(data => {
      console.log(data);
    });
  }

  //Falta por validaciones
  post(user){
  	this.http.post(this.url, user).subscribe(res => console.log( "User created"));
  }
	

}
