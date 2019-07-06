import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from '../signup/failure/fail/fail.component';
import { Router } from "@angular/router";
import { AppComponent } from '../../app.component';
import { TosComponent } from './tos/tos.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private US : UserService, private dialog: MatDialog, private router: Router, private AppComponent :  AppComponent) { }
  

  //emailInUse = false;
  hide = true;
  ngOnInit() {
    if(this.AppComponent.loggedIn){
      this.router.navigate(['']);
    }
  }

  onTos(){
    const dialogRef = this.dialog.open(TosComponent);
  }
  
  onSubmit(form : NgForm) {
    if(this.US.checkEmail(form.value.email)){
      this.US.registerUser(form.value.email, form.value.password, form.value.firstName, form.value.lastName, form.value.phone, form.value.address, form.value.typeOfUser);
      //this.emailInUse = false;
      const dialogRef = this.dialog.open(SuccessComponent);
  
      
      dialogRef.afterClosed().subscribe(() => {
        this.AppComponent.setLoggedIn(true);
        this.router.navigate(['']);
      });
    }
    else{
      //this.emailInUse = true;
      const dialogRef = this.dialog.open(FailComponent);
    }


  }

}