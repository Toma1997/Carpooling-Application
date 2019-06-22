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

  value2: number = 5;
  value3: number = 5;

  ngOnInit() {
  }

  onClick(){
    this.dialogRef.close();   
  }

}
