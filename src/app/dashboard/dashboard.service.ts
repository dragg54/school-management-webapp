import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private readonly http: HttpClient) { }
  user_auth = JSON.parse(localStorage.getItem("user_auth")!)
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Token ${this.user_auth}` 
   });

  getCurrentUser(){
    console.log(this.user_auth)
    return this.http.get("http://127.0.0.1:8000/user", {headers: this.headers})
  }
}
