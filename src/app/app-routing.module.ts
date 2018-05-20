import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { EksporterComponent } from './ui/eksporter/eksporter.component';
import { ErfaringComponent } from './ui/erfaring/erfaring.component';
import { OverblikComponent } from './ui/overblik/overblik.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { UserRegisterComponent } from './ui/user-register/user-register.component';
import { UserProfileComponent } from './ui/user-profile/user-profile.component';


const routes: Routes = [
  
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'erfaring', component: ErfaringComponent, canActivate: [AuthGuard] },
  { path: 'overblik', component: OverblikComponent, canActivate: [AuthGuard] },
  { path: 'eksporter', component: EksporterComponent, canActivate: [AuthGuard] },
  { path: 'register', component: UserRegisterComponent },
 
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
