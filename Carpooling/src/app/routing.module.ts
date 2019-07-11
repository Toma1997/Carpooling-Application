import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { ProfileComponent } from './auth/profile/profile.component';
import { NewRideComponent } from './rides/new-ride/new-ride.component'
import { AllRidesComponent } from './rides/all-rides/all-rides.component';
import { RequestsComponent } from './notifications/requests/requests.component';


const rute: Routes = [
    {path: '', component:WelcomeComponent},
    {path: 'signup', component:SignupComponent},
    {path: 'login', component:LoginComponent},
    {path: 'profile', component:ProfileComponent},
    {path: 'new-ride', component:NewRideComponent},
    {path: 'all-rides', component:AllRidesComponent},
    {path: 'notifications', component:RequestsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]

})

export class RoutingModule{}
