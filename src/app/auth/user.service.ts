import { Injectable } from "@angular/core";

import * as users from '../../assets/json_db/users.json';
import * as comments from '../../assets/json_db/comments.json';
import * as rates from '../../assets/json_db/rates.json';

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

    // constructor(private AppComponent :  AppComponent, private router: Router) { }

    profileToShow = 0;
    loggedInUser : User  = {id: 0, email: '0', password: "0", firstName: '0', lastName: "0", phone: "0", address: "0 1", dateOfRegistration: new Date(), typeOfUser: 'Passenger'};


    // READ JSON FROM FILE AND DECODE TO ARRAY -> "../../assets/json_db/users.json"
    private listOfUsers : Array<User> = [];
    
    // READ JSON FROM FILE AND DECODE TO ARRAY -> "../../assets/json_db/comments.json"
    private listOfAllComments : Array<Comment> = []; 

    // READ JSON FROM FILE AND DECODE TO ARRAY -> "../../assets/json_db/rates.json"
    private listOfAllRatings : Array<Rating> = []; 

    // NE RADI KAKO TREBA
    getJSONdata(){
        for (let i = 0; i < users.default.length; i++) {
            this.listOfUsers.push(JSON.parse(users[i]));
        }
        for (let i = 0; i < comments.default.length; i++) {
            this.listOfAllComments.push(JSON.parse(comments[i]));
        }
        for (let i = 0; i < rates.default.length; i++) {
            this.listOfAllRatings.push(JSON.parse(rates[i]));
        }
    }

    getListOfUsers() {
        return this.listOfUsers;
    }

    getCurrentUser(){
        return this.loggedInUser;
    }


    getProfileToShow(){
        return this.getListOfUsers()[this.profileToShow];
    }

    registerUser(email : string, password : string, firstName : string, lastName : string, phone: string, address : string, typeOfUser ){
        var id = this.getListOfUsers()[this.getListOfUsers().length - 1].id + 1;

        this.listOfUsers.push( {id, email,password, firstName, lastName, phone, address, typeOfUser, dateOfRegistration: new Date()} )
        this.loggedInUser = this.getListOfUsers()[this.getListOfUsers().length - 1];

    }

    checkEmail(email:string) {
        var results = [];
        var searchField = "email";
        var searchVal = email;
        for (var i=0 ; i < this.listOfUsers.length ; i++)
        {
            if (this.listOfUsers[i][searchField] == searchVal) {
                results.push(this.listOfUsers[i]);
            }
        }
        if (results.length)
            return false;
        return true;
    }

    checkEmailUpdate(email:string) {
        var results = [];
        var searchField = "email";
        var searchVal = email;
        for (var i=0 ; i < this.listOfUsers.length ; i++)
        {
            if (this.listOfUsers[i] != this.getCurrentUser()){
                if (this.listOfUsers[i][searchField] == searchVal) {
                    results.push(this.listOfUsers[i]);
                }
            }
        }
        if (results.length)
            return false;
        return true;
    }

    checkLogin(email:string, password : string) {
        var results = [];
        var searchField = "email";
        var searchVal = email;
        for (var i=0 ; i < this.listOfUsers.length ; i++)
        {
            if (this.listOfUsers[i][searchField] == searchVal) {
                results.push(this.listOfUsers[i]);
            }
        }

        if (!results.length)
            return false;
        else{
            if(results[0].password  ==  password){
                this.loggedInUser = results[0];
                // this.AppComponent.setLoggedIn(true);
                return true;
            }
        }
        return false;
    }

    getCommentsForId(id : number)  {
        var results = [];
        var searchField = "idTo";
        var searchVal = id;
        for (var i=0 ; i < this.listOfAllComments.length ; i++)
        {
            if (this.listOfAllComments[i][searchField] == searchVal) {
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
        var searchField = "idTo";
        var searchVal = id;
        var final = [];
        for (var i=0 ; i < this.listOfAllRatings.length ; i++)
        {
            if (this.listOfAllRatings[i][searchField] == searchVal) {
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
        
        final.push(sum);
        final.push(results.length)
        return final;
    }

    addComment(idFrom:number, idTo:number, comment:string){
        this.listOfAllComments.push({idFrom,idTo,date: new Date(), comment})
    }


}