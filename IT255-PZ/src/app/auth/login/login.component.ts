import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

    loginForm: FormGroup;

    constructor(private authService: AuthService)
    {
    }

    ngOnInit()
    {
        this.loginForm = new FormGroup({
            'email': new FormControl('', [Validators.required, Validators.email]),
            'password': new FormControl('', Validators.required)
        });
    }

    onSubmit()
    {
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;
        this.authService.tryLogin(email, password);
    }

    getEmailErrorMsg()
    {
        if (this.loginForm.get('email').hasError('required'))
        {
            return 'You must enter a value!'
        }
        else
        {
            if (this.loginForm.get('email').hasError('email'))
            {
                return 'Not a valid email!'
            }
            return '';
        }
    }

    getPasswordErrorMsg()
    {
        if (this.loginForm.get('password').hasError('required'))
        {
            return 'You must enter a value!'
        }
        return '';
    }
}
