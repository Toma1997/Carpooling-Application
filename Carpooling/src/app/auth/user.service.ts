import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// import { AppComponent } from 'src/app/app.component';
// import { Router } from "@angular/router";

export interface User {
    id : number;
    email : string;
    password : string;
    firstName : string;
    lastName : string;
    phone : string;
    address: string;
    dateOfRegistration : Date;
    typeOfUser : 'Driver' | 'Passenger';
    ratedRides: number[];
}

export interface Comment {
    idFrom : number;
    idTo : number;
    date : Date;
    comment: string;
}

export interface Rating {
    idFrom : number;
    idTo : number;
    rating : number;
}

@Injectable()
export class UserService {

    constructor(private http: HttpClient){

    }

    profileToShow = 0;
    // inicijalizovan nepostojeci korisnik samo da ne bi izbacivalo gresku u konzoli na pocetku
    loggedInUser : User = {id: -1, email: "", password: "", firstName: "", lastName: "", phone: "", address: "", dateOfRegistration: new Date(), typeOfUser: "Passenger", ratedRides: []};


    private listOfUsers : Array<User> = [];
    
    private listOfAllComments : Array<Comment> = []; 

    private listOfAllRatings : Array<Rating> = []; 

    getJSONdata(){
        this.http.get<User[]>("../../assets/json_db/users.json").subscribe(data => this.listOfUsers = data);
        this.http.get<Comment[]>("../../assets/json_db/comments.json").subscribe(data => this.listOfAllComments = data);
        this.http.get<Rating[]>("../../assets/json_db/rates.json").subscribe(data => this.listOfAllRatings = data);
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token',
          'Access-Control-Allow-Origin': '*'
        })
      };

    saveDataToJSON(){
        this.http.post<User[]>("http://localhost:8080/users", JSON.stringify(this.listOfUsers), this.httpOptions).subscribe(
            data  => { console.log("POST Request is successful ", data);},
            error  => {console.log("Error", error);}
            );
        this.http.post<Comment[]>("http://localhost:8080/comments", JSON.stringify(this.listOfAllComments), this.httpOptions).subscribe(
            data  => { console.log("POST Request is successful ", data);},
            error  => {console.log("Error", error);}
            );
        this.http.post<Rating[]>("http://localhost:8080/ratings", JSON.stringify(this.listOfAllRatings), this.httpOptions).subscribe(
            data  => { console.log("POST Request is successful ", data);},
            error  => {console.log("Error", error);}
            );
    }


    getListOfUsers() {
        return this.listOfUsers;
    }

    getCurrentUser(){
        return this.loggedInUser;
    }

    getUserById(id: number){
        
        var foundUser: User;
        this.listOfUsers.forEach(user => {
            if (user.id == id) {
                foundUser = user;
            }
        });
        return foundUser;
        
    }


    getProfileToShow(){
        return this.getListOfUsers()[this.profileToShow];
    }

    registerUser(email : string, password : string, firstName : string, lastName : string, phone: string, address : string, typeOfUser ){
        var id = this.getListOfUsers()[this.getListOfUsers().length - 1].id + 1;

        this.listOfUsers.push( {id, email,password, firstName, lastName, phone, address, typeOfUser, dateOfRegistration: new Date(), ratedRides: []} )
        this.loggedInUser = this.getListOfUsers()[this.getListOfUsers().length - 1];

    }

    checkEmail(email:string) {
        for (var i=0 ; i < this.listOfUsers.length ; i++){
            if (this.listOfUsers[i].email == email) {
                return false;
            }
        }
        return true;
    }

    checkEmailUpdate(email:string) {
        for (var i=0 ; i < this.listOfUsers.length ; i++){
            if (this.listOfUsers[i] != this.getCurrentUser()){
                if (this.listOfUsers[i].email == email) {
                    return false;
                }
            }
        }
        return true;
    }

    checkLogin(email:string, password : string) {
        for (var i=0 ; i < this.listOfUsers.length ; i++){
            if (this.listOfUsers[i].email == email) {
                if(this.listOfUsers[i].password  ==  password){
                    this.loggedInUser = this.listOfUsers[i];
                    return true;
                }
            }
        }
        return false;
    }

    getCommentsForId(id : number)  {
        var results = [];
        for (var i=0 ; i < this.listOfAllComments.length ; i++){
            if (this.listOfAllComments[i].idTo == id) {
                results.push(this.listOfAllComments[i]);
            }
        }
        return results;
    }

    getNameById(id : number){
        return this.listOfUsers[id].firstName + " " + this.listOfUsers[id].lastName;
    }

    getRatingById(id: number){
        var results = [];
        var final = [];
        for (var i=0 ; i < this.listOfAllRatings.length ; i++)
        {
            if (this.listOfAllRatings[i].idTo == id) {
                results.push(this.listOfAllRatings[i].rating);
            }
        }
        if (!results.length)
            return [0, 0];
        var sum = 0;
        for( var i=0; i<results.length; i++){
            sum = sum + results[i];
        }
        sum = sum/results.length;
        
        final.push(sum.toFixed(2));
        final.push(results.length);
        return final;
    }

    addComment(idFrom:number, idTo:number, comment:string){
        this.listOfAllComments.push({idFrom,idTo,date: new Date(), comment})
    }

    addRating(idFrom: number, idTo: number, rating: number){
        this.listOfAllRatings.push({idFrom, idTo, rating});
    }


}