import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/user.service';

@Component({
  selector: 'app-sent-requests',
  templateUrl: './sent-requests.component.html',
  styleUrls: ['./sent-requests.component.css']
})
export class SentRequestsComponent implements OnInit {

  date = new Date();

  constructor( private US : UserService) { }

  ngOnInit() {
  }

}
