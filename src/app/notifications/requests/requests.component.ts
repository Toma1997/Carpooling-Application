import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/user.service';
import { Router } from "@angular/router";
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private US : UserService, private router: Router, private AppComponent : AppComponent) { }

  hiddenApproved=false;
  hiddenFinished=false;

  ngOnInit() {
    if(this.AppComponent.loggedIn == false){
      this.router.navigate(['/']);
    }
  }

  onApprovedBadge(){
    this.hiddenApproved=true;
  }

  onFinishedBadge(){
    this.hiddenFinished=true;
  }
}
