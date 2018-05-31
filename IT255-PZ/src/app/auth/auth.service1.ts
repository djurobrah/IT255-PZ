import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
    router: Router;
    bla: string;
    constructor(public afAuth: AngularFireAuth, public snackBar: MatSnackBar, router: Router)
    {
        this.router = router;
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    tryRegister(email: string, username: string, password: string) {
        this.registerUser(email, username, password)
            .then(res => {
                this.updateUsername(username);
                this.logoutUser();
                this.openSnackBar("Successfully created an account!", "");
            }, err => {
                this.openSnackBar(err, "CLOSE");
            })
    }

    registerUser(email: string, username: string, password: string) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                    resolve(res);
                }, err => reject(err))
        })
    }

    tryLogin(email: string, password: string) {
        this.loginUser(email, password)
            .then(res => {
                this.router.navigate(["/home"]);
                this.bla = "blAAAA";
            }, err => {
                this.openSnackBar(err, "CLOSE");
            })
    }

    loginUser(email: string,password: string) {
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

    getDisplayName() {
        return this.afAuth.auth.currentUser.displayName;
    }

    isAuthenticated() {
        return this.afAuth.auth.currentUser != null;
    }

    logoutUser() {
        this.afAuth.auth.signOut();
    }
}