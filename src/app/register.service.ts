import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  url:string = "http://127.0.0.1:8000/register"

  ngOnInit(){
    
  }

  postUser(user: User){
    return this.http.post(this.url, user)
  }
}
