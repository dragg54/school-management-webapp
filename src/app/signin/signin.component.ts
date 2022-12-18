import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private loginService: LoginService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(){
    
  }
  loginUser(){
    this.user = this.loginForm.value
    this.loginService.postUser(this.user)?.subscribe((response: any)=>{
      const user_auth:string = response.token
      sessionStorage.setItem("user_auth", JSON.stringify(user_auth))
      this.router.navigate(["dashboard"], {relativeTo: null})

      
    })
  }
  public loginForm = new FormGroup({
    email: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl("")
  })

  user!:User
}

