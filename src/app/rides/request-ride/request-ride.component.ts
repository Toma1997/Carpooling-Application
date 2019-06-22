import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-request-ride',
  templateUrl: './request-ride.component.html',
  styleUrls: ['./request-ride.component.css']
})
export class RequestRideComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<RequestRideComponent>) { }
  

  ngOnInit() {
  }

  onClick(){
    this.dialogRef.close();
    //console.log(this.receivedData)     // this.receivedData je email koriscen za registraciju
    
  }
}
