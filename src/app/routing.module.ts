import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

// Kreiraju se automatski prilikom navođenja komponenti u nizu rute ispod
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';

const rute: Routes = [
{path : '', component: WelcomeComponent},
{path : 'signup', component: SignupComponent },
{path : 'login', component: LoginComponent},
{path : 'training', component: TrainingComponent}
];

@NgModule ({
imports: [RouterModule.forRoot(rute)],
exports: [RouterModule]
})

export class RoutingModule {}