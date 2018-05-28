import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthComponent} from './auth/auth.component';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from "../environments/environment";
import {TeamComponent} from './team/team.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes =
    [
        {path: '', redirectTo: "/home", pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'auth', component: AuthComponent, },
        {path: 'team', component: TeamComponent, canActivate: [AuthGuardService]},
        {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]}

    ]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AuthComponent,
        TeamComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [AuthService, AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
