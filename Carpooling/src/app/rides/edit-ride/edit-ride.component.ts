import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-edit-ride',
  templateUrl: './edit-ride.component.html',
  styleUrls: ['./edit-ride.component.css']
})
export class EditRideComponent implements OnInit {

  rideN="";
  destin="";
  startL="";
  sTime= new Date();
  sHour=-1;
  sMinute=-1;
  maxPass=0;


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


  constructor(private RS: RideService, private dialogRef: MatDialogRef<EditRideComponent>, private _formBuilder: FormBuilder) { }

  

  ngOnInit() {
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
  
  onClick(){
    this.dialogRef.close();
  }

  onUpdate(){
    let rides = this.RS.getRides();
    if(this.rideN != ""){
      rides[this.RS.editingRideId].rideName = this.rideN;
    }
    
    if(this.destin != ""){
      rides[this.RS.editingRideId].destination = this.destin;
    }

    if(this.startL != ""){
      rides[this.RS.editingRideId].startingLocation = this.startL;
    }

    if(this.sTime > new Date()){
      rides[this.RS.editingRideId].timeOfDeparture = this.sTime;
    }

    if(this.sHour >= 0){
      rides[this.RS.editingRideId].hourOfDeparture = this.sHour;
    }

    if(this.sMinute >= 0){
      rides[this.RS.editingRideId].minuteOfDeparture = this.sMinute;
    }

    if(this.maxPass > 0){
      rides[this.RS.editingRideId].maxPassengers = this.maxPass;
    }
    
    this.dialogRef.close();
  }

}
