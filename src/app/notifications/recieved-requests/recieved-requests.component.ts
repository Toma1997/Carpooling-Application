import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/user.service';

@Component({
  selector: 'app-recieved-requests',
  templateUrl: './recieved-requests.component.html',
  styleUrls: ['./recieved-requests.component.css']
})
export class RecievedRequestsComponent implements OnInit {

  constructor(private US : UserService) { }

  ngOnInit() {
  }

}
