import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/user.service';
import { RideService } from 'src/app/rides/ride.service';

@Component({
  selector: 'app-sent-requests',
  templateUrl: './sent-requests.component.html',
  styleUrls: ['./sent-requests.component.css']
})
export class SentRequestsComponent implements OnInit {

  date = new Date();

  constructor( private US : UserService, private RS: RideService) {

   }

  ngOnInit() {
  }

  listCurrentUserSentRequests(){
      var result = [];
      let rides = this.RS.getRides();
      let currentUserId = this.US.getCurrentUser().id;

      for(let i = 0; i < rides.length; i++){
        for(let j = 0; j < rides[i].requested.length; j++){
          if(rides[i].requested[j] == currentUserId){
            result.push(rides[i]);
          }
        }
      }
      return result;
  }

  onCancel(id: number){
    let rides = this.RS.getRides();
    let currentUserId = this.US.getCurrentUser().id;
    rides[id].requested = rides[id].requested.filter(request => request != currentUserId);
  }

}
