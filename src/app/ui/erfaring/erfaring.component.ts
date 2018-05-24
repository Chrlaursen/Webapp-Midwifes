import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'erfaring',
  templateUrl: './erfaring.component.html',
  styleUrls: ['./erfaring.component.scss']
})
export class ErfaringComponent implements OnInit {


  constructor(private afs: AngularFirestore, public auth: AuthService) { }

  ngOnInit() {
  

  }

 

}
