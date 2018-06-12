import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    constructor(public authService: AuthService, public breakpointObserver: BreakpointObserver) {
    }

    isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
}
