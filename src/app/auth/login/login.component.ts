import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { Router } from "@angular/router";
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material';
import { FailedLoginComponent } from './failure/failed-login/failed-login.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private US : UserService, private AppComponent :  AppComponent, private router: Router, private dialog: MatDialog) { }

  wrongLogin = false;
  hide = true;
  
  ngOnInit() {
    if(this.AppComponent.loggedIn){
      this.router.navigate(['']);
      console.log()
    }
  
    //autologin
    // if(this.US.checkLogin("nikola@gmail.com", "singidunum")){
    //   this.AppComponent.setLoggedIn(true);
    //   this.router.navigate(['']);
    // }
  }
  

  onSubmit(form : NgForm) {
    // console.log(form);
    if(this.US.checkLogin(form.value.email, form.value.password)){
      this.AppComponent.setLoggedIn(true);
      this.router.navigate(['']);
    }
    else{
      const dialogRef = this.dialog.open(FailedLoginComponent);
      this.wrongLogin = true;
    }

  }
}
