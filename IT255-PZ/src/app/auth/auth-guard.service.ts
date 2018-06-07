import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take';


@Injectable()
export class AuthGuardService implements CanActivate
{
    constructor(private authService: AuthService)
    {

    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean>
    {
        return this.authService.afAuth.authState.map(authState =>
        {
            if (route.routeConfig.path === "auth")
            {
                return authState === null;
            }
            else
            {
                return !(authState === null);
            }
        }).take(1)
    }
}
