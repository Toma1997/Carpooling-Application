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
    // Ovde sam hteo da napravim da ukoliko je registrovan sa gmail-om da izadje clickable link da se ode direktno u gmail radi lakse aktivacije naloga, ali nisam iskusan sa TS
    // var str = this.receivedData;
    // var gmail = "@gmail.com";
    // var usesGmail = str.substring(gmail);
    // console.log(usesGmail);
  }

  onClick(){
    this.dialogRef.close();
    //console.log(this.receivedData)     // this.receivedData je email koriscen za registraciju
    
  }
  
}
