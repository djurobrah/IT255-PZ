import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";
import {FireDatabaseService} from "../fire-database.service";
import {TeamMember} from "../team-member";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class AuthService {
    router: Router;
    authenticated: boolean;
    displayName: string;

    constructor(public afAuth: AngularFireAuth, private snackBar: MatSnackBar, router: Router,
                private databaseService: FireDatabaseService) {
        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                console.log('You are authenticated');
                this.authenticated = true;
                this.displayName = this.afAuth.auth.currentUser.displayName;
            }
            else {
                console.log('You are not authenticated');
                this.authenticated = false;
                this.displayName = null;
            }
        });
        this.router = router;
    }

    tryRegister(email: string, username: string, password: string) {
        this.registerUser(email, username, password)
            .then(res => {
                this.updateUsername(username);
                this.logoutUser();
                this.databaseService.tryAddTeamMember(new TeamMember(username, email));
                this.openSnackBar("Successfully created an account!", "CLOSE");
            }, err => {
                this.openSnackBar(err, "CLOSE");
            })
    }

    registerUser(email: string, username: string, password: string) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                        resolve(res);
                    },
                    err => reject(err))
        })
    }

    tryLogin(email: string, password: string) {
        this.loginUser(email, password)
            .then(res => {
                this.router.navigate(["/home"]);
            }, err => {
                this.openSnackBar(err, "CLOSE");
            })
    }

    loginUser(email: string, password: string) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(res => {
                    resolve(res);
                }, err => reject(err))
        })
    }

    updateUsername(username: string) {
        this.afAuth.auth.currentUser.updateProfile({
            displayName: username,
            photoURL: null
        })
            .catch
            (
                error => this.openSnackBar(error, "CLOSE")
            )
    }

    logoutUser() {
        this.afAuth.auth.signOut().then(() => {
            this.router.navigate(['']);
        });
    }

    deleteUser() {
        this.afAuth.auth.currentUser.delete().then
        (() => {
            this.router.navigate(['']);
        })
    }


    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}