import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/user.service';
import { MatDialog } from '@angular/material';
import { RateComponent } from './rate/rate.component';

@Component({
  selector: 'app-completed-rides',
  templateUrl: './completed-rides.component.html',
  styleUrls: ['./completed-rides.component.css']
})
export class CompletedRidesComponent implements OnInit {

  constructor(private US: UserService,private dialog: MatDialog) { }

  ngOnInit() {
  }

  onRate(){
    const dialogRef = this.dialog.open(RateComponent);
  }

}
