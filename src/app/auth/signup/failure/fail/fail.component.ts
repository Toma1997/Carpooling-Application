import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<FailComponent>) {}

  ngOnInit() {
  }

  onClick(){
    this.dialogRef.close();
  }

}
