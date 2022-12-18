import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  url:string = "http://127.0.0.1:8000/login"

  postUser(request:User){
    return this.http.post(this.url, request)
  }
}
