import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-failed-login',
  templateUrl: './failed-login.component.html',
  styleUrls: ['./failed-login.component.css']
})
export class FailedLoginComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<FailedLoginComponent>) {}

  ngOnInit() {
  }

  onClick(){
    this.dialogRef.close();
  }

}
