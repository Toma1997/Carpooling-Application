import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../../../auth/user.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor(private US: UserService, private dialogRef: MatDialogRef<RateComponent>) { }


  // ocena
  value: number = 5;

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

  onClick(){
    this.dialogRef.close();   
  }

  onConfirm(){ 
    // napraviti u UserService metodu za dodavanje jedne ocene u niz ocena
    // idFrom - this.US.getCurrentUser().id , idTo - vozac (trenutni korisnik je putnik) ili niz putnika (korisnik je vozac),
    this.dialogRef.close();
  }

  passengersOfThisRide(){
    let result = []; // pribaviti niz putnika ako je vozac korisnik

    return result;
  }

}
