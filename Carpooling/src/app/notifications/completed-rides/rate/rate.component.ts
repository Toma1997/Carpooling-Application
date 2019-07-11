import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../../../auth/user.service';
import { Options } from 'ng5-slider';
import { RideService } from 'src/app/rides/ride.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor(private US: UserService, private RS: RideService, private dialogRef: MatDialogRef<RateComponent>) { }


  // ocena
  driverRate: number = 3;
  passengersRates: Array<number> = [];

  options: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5}
    ]
  };

  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();   
  }

  onConfirm(){ 
    let idFrom = this.US.getCurrentUser().id;
    if(this.US.getCurrentUser().typeOfUser == "Driver"){ // oceni putnike

      let ride = this.RS.getRides()[this.RS.ratingRideId];
      for(let i = 0; i < ride.passengers.length; i++){
        this.US.addRating(idFrom, ride.passengers[i], this.passengersRates[i]);
      }
      
    } else { // oceni vozaca

      let idTo = this.RS.getRideById(this.RS.ratingRideId).idDriver;
      this.US.addRating(idFrom, idTo, this.driverRate);
    }
    this.US.getCurrentUser().ratedRides.push(this.RS.ratingRideId);
    this.dialogRef.close();
  }

  passengersOfThisRide(){
    let result = []; // pribaviti niz putnika ako je vozac korisnik
    let ride = this.RS.getRideById(this.RS.ratingRideId);
    for(let i = 0; i < ride.passengers.length; i++){
      this.passengersRates.push(3); // ubaci inicijalne vrednosti
      result.push({passenger: this.US.getNameById(ride.passengers[i]), passengerIndex: i});
    }
    return result;
  }

  getDriverFullName(){
    return this.US.getNameById(this.RS.getRides()[this.RS.ratingRideId].idDriver);
  }

}
