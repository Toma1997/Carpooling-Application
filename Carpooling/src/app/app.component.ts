import { Component } from '@angular/core';
import { UserService } from '../app/auth/user.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { RideService } from './rides/ride.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Singidunum Carpooling';

  route: string;

  constructor(private US : UserService, private RS: RideService, location: Location, private router : Router) {
    router.events.subscribe((val) => {
      if(location.path() == ''){
        this.route = "Singidunum Carpooling";
      } else if(location.path() == '/profile'){
        this.route = "Profile";
      }else if(location.path() == '/signup'){
        this.route = "Register";
      }else if(location.path() == '/login'){
        this.route = "Log in";
      }else if(location.path() == '/new-ride'){
        this.route = "Create a ride";
      }else if(location.path() == '/all-rides'){
        this.route = "Rides";
      }else if(location.path() == '/notifications'){
        this.route = "Notifications and Requests";
      }
    });
  }
  loggedIn : boolean = false;

  setLoggedIn( value : boolean){
    this.loggedIn = value;
  }

  signOut(){
    this.US.saveDataToJSON();
    if(this.RS.removingQueue.length > 0){
      this.RS.removeRides();
    }
    this.RS.saveDataToJSON();
    this.loggedIn = false;
  }

  myProfile(){
    this.US.profileToShow = this.US.loggedInUser.id;
  }

}