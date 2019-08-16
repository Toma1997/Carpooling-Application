import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserService } from "../auth/user.service";
import { User } from "../auth/user.service";

export interface Ride {
    id : number;
    rideName : string;
    idDriver : number;
    maxPassengers : number;
    requested : number[];
    passengers : number[];
    timeOfDeparture : Date;
    hourOfDeparture : number;
    minuteOfDeparture : number;
    startingLocation : string;
    destination : string;
    status : 'canceled' | 'in progress' | 'done' ;
}


@Injectable()
export class RideService {

    constructor(private http: HttpClient, private UserService: UserService){
    
    }

    private rides : Array<Ride> = [];
    public editingRideId: number;
    public ratingRideId: number;
    public removingQueue: Array<number> = [];

    getJSONdata(){
        this.http.get<Ride[]>("../../assets/json_db/rides.json").subscribe(data => this.rides = data);
    }


    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token',
          'Access-Control-Allow-Origin': '*'
        })
      };

    saveDataToJSON(){
        this.http.post<Ride[]>("http://localhost:8080/rides", JSON.stringify(this.rides), this.httpOptions).subscribe(
            data  => { console.log("POST Request is successful ", data);},
            error  => {console.log("Error", error);}
            );
    }

    getRides() {
        return this.rides;
    }

    createRide(idDriver:number, rideName:string ,maxPassengers:number, timeOfDeparture : Date, hourOfDeparture : number, minuteOfDeparture : number, startingLocation : string, destination : string){
        var id = this.rides[length-1].id + 1;


        this.rides.push( {id: id, rideName : rideName ,idDriver: idDriver, maxPassengers: maxPassengers, requested: [], passengers : [],
        timeOfDeparture : timeOfDeparture, hourOfDeparture : hourOfDeparture, minuteOfDeparture : minuteOfDeparture,
        startingLocation : startingLocation, destination : destination, status : 'in progress'} )
       
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

    removeRides() {
        while(this.removingQueue.length != 0){
            let tempId = this.removingQueue.pop();
            this.rides = this.rides.filter(ride => ride.id != tempId);
        }
    }
    
    getMidLocations(ridePassengers: Array<number>){
        let result = "";
        for(let i = 0; i < ridePassengers.length; i++){
            result += "/" + this.UserService.getUserById(ridePassengers[i]).address;
        }
        return result;
    }
    
}