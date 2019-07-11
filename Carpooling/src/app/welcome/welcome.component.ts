import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private AppComponent :  AppComponent) { }


  ngOnInit() {
    if(this.AppComponent.loggedIn){
      this.router.navigate(['']);
    }
  }

  login(){
    this.router.navigate(['/login']);
  }

  signup(){
    this.router.navigate(['/signup']);
  }



}
