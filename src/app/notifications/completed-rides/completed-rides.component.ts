import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/user.service';
import { MatDialog } from '@angular/material';
import { RateComponent } from './rate/rate.component';
import { RideService } from 'src/app/rides/ride.service';

@Component({
  selector: 'app-completed-rides',
  templateUrl: './completed-rides.component.html',
  styleUrls: ['./completed-rides.component.css']
})
export class CompletedRidesComponent implements OnInit {

  constructor(private US: UserService, private RS: RideService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onRate(){
    const dialogRef = this.dialog.open(RateComponent);
  }

  listCurrentUserFinishedRides(){
    var result = [];
      let rides = this.RS.getRides();
      let currentUser = this.US.getCurrentUser();

      for(let i = 0; i < rides.length; i++){
        if(rides[i].status == "done"){
          if(currentUser.typeOfUser == "Driver" && rides[i].idDriver == currentUser.id){ // kada je korisnik vozac prikazi samo kada je on vozio
            result.push(rides[i]);
          } else if(currentUser.typeOfUser == "Passenger") { // kada je korisnik putnik onda prikaze samo voznje gde je on bio vozen
            for(let j = 0; j < rides[i].passengers.length; j++){
              if(rides[i].passengers[j] == currentUser.id){
                result.push(rides[i]);
              }
            }
          }
          
        }
        
      }
      return result;
  }

  getPassengers(rideId: number){
    let ride = this.RS.getRideById(rideId);
    return ride.passengers;

  }

}
