import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';


import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent} from './user-register/user-register.component';
import { ErfaringComponent } from './erfaring/erfaring.component';
import { OverblikComponent } from './overblik/overblik.component';
import { EksporterComponent } from './eksporter/eksporter.component';
import { SemesterComponent } from './semester/semester.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    UserLoginComponent,
    HomePageComponent,
    MainNavComponent,
  
    UserProfileComponent,
    UserRegisterComponent,
    ErfaringComponent,
    OverblikComponent,
    EksporterComponent,
    SemesterComponent
  ],
  exports: [
    MainNavComponent,
 
    UserLoginComponent,
    UserProfileComponent,
    UserRegisterComponent
  ]
})
export class UiModule {}
