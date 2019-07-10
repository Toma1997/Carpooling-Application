import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/user.service';
import { RideService } from 'src/app/rides/ride.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  constructor(private US : UserService, private RS: RideService) {

  }

  ngOnInit() {

  }

  listCurrentUserApprovedRides(){
    var result = [];
      let rides = this.RS.getRides();
      let currentUserId = this.US.getCurrentUser().id;

      for(let i = 0; i < rides.length; i++){
        if(rides[i].status == "in progress"){
          for(let j = 0; j < rides[i].passengers.length; j++){
            if(rides[i].passengers[j] == currentUserId){
              result.push(rides[i]);
            }
          }
        }
        
      }
      return result;
  }

}
