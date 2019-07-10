import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { RideService, Ride } from '../ride.service';
import { UserService } from '../../auth/user.service';
import { Router } from "@angular/router";
import { AppComponent } from '../../app.component';
import { Options, LabelType } from 'ng5-slider';
import { MatDialog } from '@angular/material';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RequestRideComponent } from '../request-ride/request-ride.component';
import {EditRideComponent} from '../edit-ride/edit-ride.component';

@Component({
  selector: 'app-all-rides',
  templateUrl: './all-rides.component.html',
  styleUrls: ['./all-rides.component.css']
})
export class AllRidesComponent implements OnInit, AfterViewInit {

  value: number = 0;
  highValue: number = 24;
  options: Options = {
    floor: 0,
    ceil: 24,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Earliest hour:</b> ' + value;
        case LabelType.High:
          return '<b>Latest hour:</b> ' + value;
        default:
          return value.toString();
      }
    }
  };

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup;
  fourthFormGroup : FormGroup;
  fifthFormGroup : FormGroup;


  displayedColumns = ["rideName","idDriver","timeOfDeparture", "hourOfDeparture","minuteOfDeparture","startingLocation", "destination", "passengers",  "maxPassengers", "status", "action"];
  rideSource = new MatTableDataSource<Ride>();
  temp:number;
  rideToggle:boolean;

  // ZA WIN
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  // ZA MAC
  //@ViewChild(MatSort, {read: true, static: false}) sort : MatSort;
  //@ViewChild(MatPaginator, {read: true, static: false}) paginator : MatPaginator;


  constructor (private RS : RideService, private US : UserService, private router : Router, private AppComponent : AppComponent, private _formBuilder: FormBuilder, private dialog: MatDialog) {
    
  }
  
  
  doFilter(filterValue : string){
    this.rideSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    if(this.AppComponent.loggedIn == false){
      this.router.navigate(['']);
    }
    
    this.rideToggle=true;
    this.rideSource.data = this.RS.getRides();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: []
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: []
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: []
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: []
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: []
    });
  }

  // na klik Go dugmeta vozac zapocinje, a ako je putnik onda se samo prijavljuje za voznju
  requestOrStartRide(ride: Ride){
    if(this.US.getCurrentUser().id == ride.idDriver){ // vozac je kliknuo Go
      this.RS.getRides()[ride.id].status = "done";
    } else {
      this.RS.getRides()[ride.id].requested.push(this.US.getCurrentUser().id);
    }
    const dialogRef = this.dialog.open(RequestRideComponent);
  }

  editRide(id: number){
    this.RS.editingRideId = id;
    const dialogRef = this.dialog.open(EditRideComponent);
  }

  passengerAppliedForRide(id: number) : boolean{

    let rides = this.RS.getRides();
    let currentUser = this.US.getCurrentUser();

    console.log(rides[id]);

    if(rides[id].status != "in progress"){
      return true;
    }

    // ako vozac nije resio sve zahteve od putnika
    if( (currentUser.id == rides[id].idDriver && rides[id].requested.length > 0) ||
      (currentUser.id != rides[id].idDriver && rides[id].passengers.length >= rides[id].maxPassengers)){
      return true;
    }

    // provere da li je putnik vec slao zahtev ili je prihvacen
    for(let i = 0; i < rides[id].requested.length; i++){
      if(rides[id].requested[i] == currentUser.id){
        return true;
      }
    }
    for(let i = 0; i < rides[id].passengers.length; i++){
      if(rides[id].passengers[i] == currentUser.id){
        return true;
      }
    }
    return false;
  }

  removeRide(rideId: number){
    this.RS.removeRide(rideId);
    this.ngOnInit();
  }
  
  
  ngAfterViewInit() {
    this.rideSource.sort = this.sort;
    this.rideSource.paginator = this.paginator;
  } 

  viewProfile(idDriver:number){
    this.US.profileToShow=idDriver;
  }
}
