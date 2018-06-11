import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {FirestorageService} from "../../firestorage.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    registerForm: FormGroup;

    ngOnInit() {
        this.registerForm = new FormGroup({
            'email': new FormControl('', [Validators.required, Validators.email]),
            'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
            'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
            'passwordConf': new FormControl('', [Validators.required, this.passMismatch.bind(this)]),
        });
    }

    onSubmit() {
        const email = this.registerForm.value.email;
        const password = this.registerForm.value.password;
        const username = this.registerForm.value.username;
        this.authService.tryRegister(email, username, password);
    }

    getEmailErrorMsg() {
        if (this.registerForm.get('email').hasError('required')) {
            return 'You must enter a value!'
        }
        else {
            if (this.registerForm.get('email').hasError('email')) {
                return 'Not a valid email!'
            }
            return '';
        }
    }

    getUsernameErrorMsg() {
        if (this.registerForm.get('username').hasError('required')) {
            return 'You must enter a value!'
        }
        else {
            if (this.registerForm.get('email').hasError('minlength')) {
                return 'Minimum 6 characters!'
            }
            return '';
        }
    }

    getPasswordErrorMsg() {
        if (this.registerForm.get('password').hasError('required')) {
            return 'You must enter a value!'
        }
        else {
            if (this.registerForm.get('password').hasError('minlength')) {
                return 'Minimum 6 characters!'
            }
        }
        return '';
    }

    // CUSTOM VALIDATOR
    passMismatch(control: FormControl): { [s: string]: boolean } {
        if (control.value !== control.root.value.password) {
            return {'passDontMatch': true};
        }
        return null;
    }

    getPasswordConfErrorMsg() {
        if (this.registerForm.get('passwordConf').hasError('required')) {
            return 'You must enter a value!'
        }
        else {
            if (this.registerForm.get('passwordConf').hasError('passDontMatch')) {
                return 'Passwords do not match!'
            }
        }
        return '';
    }
}
