import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import RegistrationService from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginFailed :Boolean = false;

  @Output() loggedInNow = new EventEmitter<Boolean>();

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    
  }

  login(data: any) {
    
      const promise = this.service.login({ userEmail: data.email, password: data.password });
      promise.subscribe(response => {
        console.log(response);
        this.loggedInNow.emit(true);
        this.router.navigateByUrl("/showcompany");
      },
      ()=>{this.loginFailed=true;})
      

  }




}