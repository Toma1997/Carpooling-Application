import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<SuccessComponent>, @Inject(MAT_DIALOG_DATA) public receivedData: any) { }

  ngOnInit() {
  }

  onClick(){
    this.dialogRef.close();
    //console.log(this.receivedData)     // this.receivedData je email koriscen za registraciju
    
  }
  
}
