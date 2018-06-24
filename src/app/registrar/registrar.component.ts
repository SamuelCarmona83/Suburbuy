import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

  
  constructor( private http: HttpClient, private _postService: PostService) { }

  public user = {
  }

  ngOnInit() {

  }

  get(){
    this._postService.get();
  }

  postuser(){
    this._postService.post(this.user);
    console.log ( this.user );
    
  }

  }


