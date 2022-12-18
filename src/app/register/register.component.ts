import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private registerService: RegisterService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(){
    
  }
  saveUser(){
    this.user = this.registrationForm.value
    this.registerService.postUser(this.user)?.subscribe((response)=>{
      console.log(response)
      this.router.navigate(["signin"], {relativeTo: null})

      
    })
  }
  public registrationForm = new FormGroup({
    email: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl("")
  })

  user!:User
}
