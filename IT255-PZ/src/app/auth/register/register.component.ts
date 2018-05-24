import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

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
            'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
            'passwordConf': new FormControl('', [Validators.required, this.passMismatch.bind(this)])
        });
    }

    onSubmit() {
        const email = this.registerForm.value.email;
        const password = this.registerForm.value.password;
        const passwordConf = this.registerForm.value.passwordConf;
        this.authService.registerUser(email, password);
        console.log(password);
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
