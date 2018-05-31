import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {promise} from "selenium-webdriver";
import {User} from "firebase";
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
            console.log(authState);
            if (authState === null)
            {
                if(route.routeConfig.path === "auth")
                {
                    console.log("aaa");
                    return true;
                }
                return false;
            }
            else
            {
                console.log(route.routeConfig.path);
                if(route.routeConfig.path === "auth")
                {
                    console.log("aaa");
                    return false;
                }
                return true;
            }
        }).take(1)
    }

    // async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    // {
    //     var bla = await this.authService.isAuthenticatedAsync().then(function (result)
    //     {
    //
    //     });
    //     return true;
    //
    // }
}
