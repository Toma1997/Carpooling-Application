import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/user.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  constructor(private US : UserService) { }

  ngOnInit() {
  }

}
