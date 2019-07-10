import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/user.service';
import { RideService } from 'src/app/rides/ride.service';

@Component({
  selector: 'app-recieved-requests',
  templateUrl: './recieved-requests.component.html',
  styleUrls: ['./recieved-requests.component.css']
})
export class RecievedRequestsComponent implements OnInit {

  constructor(private US : UserService, private RS: RideService) { }

  ngOnInit() {
  }

  listOfReceivedRequests(){
    let result = []; // sadrzace parove kao zahteve (id putnika, voznja)
    let rides = this.RS.getRides(); 
    let currentUser = this.US.getCurrentUser();
    for(let i = 0; i < rides.length; i++){
      if(rides[i].idDriver == currentUser.id && rides[i].requested.length > 0){
        for(let j = 0; j < rides[i].requested.length; j++){
          result.push({requestedId: rides[i].requested[j], ride: rides[i]});
        }
      }
    }
    return result;
  }

  onDeny(rideId: number, idUserRequestedTarget: number){
    let rides = this.RS.getRides();
    rides[rideId].requested = rides[rideId].requested.filter(idUser => idUser != idUserRequestedTarget);
  }

  onApprove(rideId: number, idUserRequestedTarget: number){
    let rides = this.RS.getRides();
    rides[rideId].requested = rides[rideId].requested.filter(idUser => idUser != idUserRequestedTarget);
    rides[rideId].passengers.push(idUserRequestedTarget);
  }

}
