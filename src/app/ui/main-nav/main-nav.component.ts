import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  
constructor(public auth: AuthService, private breakpointObserver: BreakpointObserver) {}
  
logout() {
  this.auth.signOut();
}
}

