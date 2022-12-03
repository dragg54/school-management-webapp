import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 /*  registrationForm = new FormGroup({
    email: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  }) */
  constructor(private readonly fb: FormBuilder){}
  registrationForm = this.fb.group({
    email: [""],
    username: [""],
    password: [""]
  })

}
