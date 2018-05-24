import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {
    constructor(public afAuth: AngularFireAuth) {
    }

    registerUser(email: string, password: string) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .catch
            (
                error => console.log(error)
            )
    }
}