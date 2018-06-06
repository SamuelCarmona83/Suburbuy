import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

	//var url = 'https://apirest-suburbuy.herokuapp.com/users';

  constructor( private http: HttpClient, private _postService: PostService) { }

  ngOnInit() {

  	
  	this._postService.get();
	
  }

  }

  /*
	var url = 'https://example.com/profile';
	var data = {username: 'example'};

	fetch(url, {
  		method: 'POST', // or 'PUT'
  		body: JSON.stringify(data), // data can be `string` or {object}!
  		headers:{
    	'Content-Type': 'application/json'
 	 }
	}).then(res => res.json())
	.catch(error => console.error('Error:', error))
	.then(response => console.log('Success:', response));
  */

