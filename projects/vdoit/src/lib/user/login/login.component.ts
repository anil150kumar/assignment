import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import * as firebase from 'firebase'


@Component({
  selector: 'enl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
signinForm : FormGroup
  constructor(private form : FormBuilder,private auth:AuthService) { }

  ngOnInit() {
    this.signinForm = this.form.group({
      email:['',Validators.required],
      password : ['',Validators.required]
    })
    
  }
  onSubmit(){
    const email = this.signinForm.value.email
    const password = this.signinForm.value.password
    this.auth.signinUser(email,password)
    console.log(firebase.auth().currentUser.email)
  }


}
