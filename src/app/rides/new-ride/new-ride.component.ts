import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RideService } from '../ride.service';
import { UserService } from '../../auth/user.service';
import { MatDialog } from '@angular/material';
import { SuccessComponent } from '../../auth/signup/success/success.component';
import { Router } from "@angular/router";
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.css']
})
export class NewRideComponent{
  isLinear = false;
  rideFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup : FormGroup;

  rideName:string;
  destination:string;
  startingLocation:string;
  timeOfDeparture:Date;
  hourOfDeparture:number;
  minuteOfDeparture:number;
  maxPassengers:number;
  

  constructor(private _formBuilder: FormBuilder, private RS : RideService, private US : UserService, private dialog: MatDialog, private router: Router, private AppComponent : AppComponent) { }

  ngOnInit() {
    if(this.AppComponent.loggedIn == false){
      this.router.navigate(['/']);
    }


    this.rideFormGroup = this._formBuilder.group({
      rideNameFF: ['', Validators.required]
    });
    this.firstFormGroup = this._formBuilder.group({
      DestinationFF: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      timeOfDepartureFF: ['', Validators.required],
      hourOfDepartureFF: ['', Validators.required],
      minuteOfDepartureFF: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      startingLocationFF: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      maxPassengersFF: ['', Validators.required]
    });
    this.fifthFormGroup =  this._formBuilder.group({});
  }


  form1(){
    this.destination=this.firstFormGroup.value.DestinationFF;
  }

  form2(){
    this.timeOfDeparture=   this.secondFormGroup.value.timeOfDepartureFF;
    this.hourOfDeparture=   this.secondFormGroup.value.hourOfDepartureFF;
    this.minuteOfDeparture= this.secondFormGroup.value.minuteOfDepartureFF;
    
  }

  form3(){
    this.startingLocation=this.thirdFormGroup.value.startingLocationFF;
  }

  form4(){
    this.maxPassengers=this.fourthFormGroup.value.maxPassengersFF;
  }

  form6(){
    this.rideName=this.rideFormGroup.value.rideNameFF;
  }


  final(){
    this.RS.createRide(this.US.getCurrentUser().id,this.rideName,this.maxPassengers,this.timeOfDeparture,this.hourOfDeparture,this.minuteOfDeparture, this.startingLocation, this.destination)
    const dialogRef = this.dialog.open(SuccessComponent);
  
      
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['']);
    });
  }

}