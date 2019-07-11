import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from "@angular/router";
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { FailComponent } from '../signup/failure/fail/fail.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private US : UserService, private AppComponent :  AppComponent, private router: Router, private dialog: MatDialog) { }

  isEditing = false;
  hide = true;
  comment = "";

  firstName=this.US.getCurrentUser().firstName;
  lastName=this.US.getCurrentUser().lastName;
  email=this.US.getCurrentUser().email;
  password=this.US.getCurrentUser().password;
  phone=this.US.getCurrentUser().phone;
  address=this.US.getCurrentUser().address;
  typeOfUser=this.US.getCurrentUser().typeOfUser;
  
  ngOnInit() {
    if(this.AppComponent.loggedIn == false){
      this.router.navigate(['']);
    }
  }

  onSubmit(form : NgForm) {
    if(this.US.checkEmailUpdate(this.email)){
      this.US.getCurrentUser().firstName=this.firstName;
      this.US.getCurrentUser().lastName=this.lastName;
      this.US.getCurrentUser().email=this.email;
      this.US.getCurrentUser().password=this.password;
      this.US.getCurrentUser().phone=this.phone;
      this.US.getCurrentUser().address=this.address;
      this.US.getCurrentUser().typeOfUser=this.typeOfUser;

      this.isEditing = false;
    } else{
      const dialogRef = this.dialog.open(FailComponent);
    }
  }

  onComment(form : NgForm){
    var comment = form.value.comment;
    var idFrom = this.US.getCurrentUser().id;
    var idTo = this.US.getProfileToShow().id;
    this.US.addComment(idFrom,idTo,comment);
    this.comment = " ";
  }


}
