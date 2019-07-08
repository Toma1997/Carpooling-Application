import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserService } from "../auth/user.service";
import { User } from "../auth/user.service";

//import { User } from "../auth/user.service";

export interface Ride {
    id : number;
    rideName : string;
    idDriver : number;
    maxPassengers : number;
    requested : number[];
    rejected : number[];
    passengers : number[];
    timeOfDeparture : Date;
    hourOfDeparture : number;
    minuteOfDeparture : number;
    startingLocation : string;
    destination : string;
    status : 'canceled' | 'scheduled' |  'in progress' | 'done' ;
}


@Injectable()
export class RideService {

    constructor(private http: HttpClient, private UserService: UserService){
    
    }

    private rides : Array<Ride> = [];

    getJSONdata(){
        this.http.get<Ride[]>("../../assets/json_db/rides.json").subscribe(data => this.rides = data);
    }

    getRides() {
        return this.rides;
    }

    createRide(idDriver:number, rideName:string ,maxPassengers:number, timeOfDeparture : Date, hourOfDeparture : number, minuteOfDeparture : number, startingLocation : string, destination : string){
        var id = this.rides.length;


        this.rides.push( {id: id, rideName : rideName ,idDriver: idDriver, maxPassengers: maxPassengers, requested: [], rejected: [], passengers : [],
        timeOfDeparture : timeOfDeparture, hourOfDeparture : hourOfDeparture, minuteOfDeparture : minuteOfDeparture,
        startingLocation : startingLocation, destination : destination, status : 'scheduled'} )
       
    }

    
    getDriverById(id: number) {
        var foundUser: User;
        this.UserService.getListOfUsers().forEach(user => {
            if (user.id == id) {
                foundUser = user;
            }
        });
        return foundUser;
    }

    getRideById(id: number) {
        var foundRide: Ride;
        this.rides.forEach(ride => {
            if (ride.id == id) {
                foundRide = ride;
            }
        });
        return foundRide;
    }

    removeRide(rideToDelete: Ride) {
        this.rides = this.rides.filter(ride => 
            ride.id != rideToDelete.id);
    } 
    
}