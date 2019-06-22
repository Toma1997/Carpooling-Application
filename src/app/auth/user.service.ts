import { Injectable } from "@angular/core";
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


    private listOfUsers : Array<User> = [
       {id: 0, email: 'nikola@gmail.com', password: "singidunum", firstName: 'Nikola', lastName: "P", phone: "06412345678", address: "Beogradska 1", dateOfRegistration: new Date(), typeOfUser: 'Passenger'},
       {id: 1, email: 'babydriver@gmail.com', password: "singidunum", firstName: 'Baby', lastName: "Driver", phone: "069123456", address: "Resavska 1", dateOfRegistration: new Date(), typeOfUser: 'Driver'},
       {id: 2, email: 'test2@gmail.com', password: "singidunum", firstName: 'Pera', lastName: "Peric", phone: "123222222", address: "Beogradska 2", dateOfRegistration: new Date(), typeOfUser: 'Driver'}
    ]


    private listOfAllComments : Array<Comment> = [
        {idFrom : 1, idTo: 0, date: new Date(), comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {idFrom : 0, idTo: 0, date: new Date(), comment : "test456"},
        {idFrom : 0, idTo: 1, date: new Date(), comment : "test789"}
    ]

    private listOfAllRatings : Array<Rating> = [
        {idFrom : 1, idTo: 0, rating: 4},
        {idFrom : 2, idTo: 0, rating: 5},
        {idFrom : 0, idTo: 1, rating: 5},
        {idFrom : 1, idTo: 2, rating: 4},
        {idFrom : 0, idTo: 2, rating: 5},
    ]


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
        this.loggedInUser = this.getListOfUsers()[this.getListOfUsers().length - 1]
        

        //console.log(this.getListOfUsers());
        //console.log(this.loggedInUser.lastName)

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
        // console.log(results);
        // console.log(results.length);
        if (!results.length)
            return false;
        else{
            if(results[0].password  ==  password){
                this.loggedInUser = results[0];
                // this.AppComponent.setLoggedIn(true);
                // this.router.navigate(['/training']);
                //console.log(this.loggedInUser.firstName)
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
        // if (results.length)
        //     console.log("duzina niza je 0");
        //     return false;
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