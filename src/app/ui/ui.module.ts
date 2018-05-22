
import { CommonModule } from '@angular/common';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../material.module';


import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';



import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent} from './user-register/user-register.component';
import { ErfaringComponent } from './erfaring/erfaring.component';
import { OverblikComponent } from './overblik/overblik.component';
import { EksporterComponent } from './eksporter/eksporter.component';
import { SemesterComponent } from './semester/semester.component';
import { MainNavComponent }  from './main-nav/main-nav.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MaterialModule
    ],

  declarations: [
    UserLoginComponent,
    HomePageComponent,
    UserProfileComponent,
    UserRegisterComponent,
    ErfaringComponent,
    OverblikComponent,
    EksporterComponent,
    SemesterComponent,
    MainNavComponent
    
  ],
  exports: [
    UserLoginComponent,
    HomePageComponent,
    UserProfileComponent,
    UserRegisterComponent,
    ErfaringComponent,
    OverblikComponent,
    EksporterComponent,
    SemesterComponent,
    MainNavComponent
  ],
 
  
})
export class UiModule {}
