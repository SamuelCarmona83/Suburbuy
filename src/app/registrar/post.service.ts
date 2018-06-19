import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()


export class PostService {

  constructor(private http:HttpClient) { }

  get(){

  	this.http.get('https://apirest-suburbuy.herokuapp.com/users').subscribe(data => {
      console.log(data);
    });
  }

  /*
  post(){
  	this.http.post('http://jsonplaceholder.typicode.com/posts', user)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
	*/

}
