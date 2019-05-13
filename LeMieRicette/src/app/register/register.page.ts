import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm:FormGroup;

 error_messages={
   'email': [
     {type:'required', message: "email richiesta"}
     
   ],
   'nome': [
    {type:'required', message: "nome richiesto"}
    
  ],
  'cognome': [
    {type:'required', message: "cognome richiesto"}
    
  ],
   'password': [
    {type:'required', message: "password richiesta"},
    {type:'minlength', message: "password di almeno 6 caratteri"}
   ],
 }
  constructor(public router:Router,
              public FormBuilder: FormBuilder) {
                this.registerForm=this.FormBuilder.group({
                  password: new FormControl('',Validators.compose([
                   Validators.required,
                   Validators.minLength(6)
                  ])),
                  email: new FormControl('',Validators.compose([
                   Validators.required
                  ])),
                  nome: new FormControl('',Validators.compose([
                    Validators.required
                   ])),
                   cognome: new FormControl('',Validators.compose([
                    Validators.required
                   ]))
                });
    
  }


  ngOnInit() {
  }

  back(){
    this.router.navigate(['/login'])
  }

}
