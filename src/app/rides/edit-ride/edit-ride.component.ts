import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-ride',
  templateUrl: './edit-ride.component.html',
  styleUrls: ['./edit-ride.component.css']
})
export class EditRideComponent implements OnInit {

  ride="Voznja 1";
  dest="Danijelova  32";
  sL="Usce shopping center";
  sT= new Date();
  sH="10";
  sM="40";
  p="4";


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


  constructor( private dialogRef: MatDialogRef<EditRideComponent>, private _formBuilder: FormBuilder) { }

  

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

}
