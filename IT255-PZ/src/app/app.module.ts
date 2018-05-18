import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes =
    [
        {path: '', redirectTo: "/home", pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'auth', component: AuthComponent}
    ]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AuthComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
