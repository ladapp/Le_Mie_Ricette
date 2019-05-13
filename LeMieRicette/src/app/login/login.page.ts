import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class LoginPage implements OnInit {

 loginForm:FormGroup;

 error_messages={
   'email': [
     {type:'required', message: "email richiesta"}
     
   ],
   'password': [
    {type:'required', message: "password richiesta"},
    {type:'minlength', message: "password di almeno 6 caratteri"}
   ],
 }

  constructor(public router:Router,
              public FormBuilder: FormBuilder) {
   this.loginForm=this.FormBuilder.group({
     password: new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(6)
     ])),
     email: new FormControl('',Validators.compose([
      Validators.required
     ]))
   });
    
  }
      
  
 
  ngOnInit() {
  }

  registrati(){
    this.router.navigate(['/register']);
  }

  back(){
    this.router.navigate(['/home']);
  }


  

}


 

