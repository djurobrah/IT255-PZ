import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl('', [Validators.required, Validators.email]),
            'password': new FormControl('', Validators.required)
        });
    }

    onSubmit() {
        console.log(this.loginForm);
    }

    getEmailErrorMsg() {
        if (this.loginForm.get('email').hasError('required')) {
            return 'You must enter a value!'
        }
        else {
            if (this.loginForm.get('email').hasError('email')) {
                return 'Not a valid email!'
            }
            return '';
        }
    }

    getPasswordErrorMsg() {
        if (this.loginForm.get('password').hasError('required'))
        {
            return 'You must enter a value!'
        }
        return '';
    }
}
