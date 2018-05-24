import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SemesterService } from './semester.service';

import { Semester2Component } from '../semester2/semester2.component';


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      AngularFirestoreModule.enablePersistence(),
    ],
    declarations: [
        

    ],
    providers: [
      SemesterService
    ]
  })
  export class SemesterModule { }
  