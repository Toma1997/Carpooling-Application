import { Injectable } from "@angular/core";
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

    private rides : Array<Ride> = [
        {id: 0, rideName: "test voznja" ,idDriver: 1, maxPassengers : 4, requested : [], rejected: [], passengers : [0], timeOfDeparture : new Date(), hourOfDeparture : 10,
        minuteOfDeparture :20, startingLocation : "Trg Republike", destination : "Danijelova 32", status : 'canceled' },
        {id: 1, rideName: "Prevoz studenata" ,idDriver: 2, maxPassengers : 4, requested : [], rejected: [], passengers : [1,2], timeOfDeparture : new Date(), hourOfDeparture : 15,
        minuteOfDeparture :15, startingLocation : "Kalemegdan", destination : "Singidunum", status : 'scheduled' }
    ]

    getRides() {
        return this.rides;
    }

    createRide(idDriver:number, rideName:string ,maxPassengers:number, timeOfDeparture : Date, hourOfDeparture : number, minuteOfDeparture : number, startingLocation : string, destination : string){
        var id = this.rides.length;


        this.rides.push( {id: id, rideName : rideName ,idDriver: idDriver, maxPassengers: maxPassengers, requested: [], rejected: [], passengers : [],
        timeOfDeparture : timeOfDeparture, hourOfDeparture : hourOfDeparture, minuteOfDeparture : minuteOfDeparture,
        startingLocation : startingLocation, destination : destination, status : 'scheduled'} )
       
    }
}