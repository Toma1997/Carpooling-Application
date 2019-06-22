import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.css']
})
export class TosComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<TosComponent>) { }

  ngOnInit() {
  }

  onClick(){
    this.dialogRef.close();
    
  }
}
