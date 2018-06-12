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
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
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
import {AngularFireStorageModule} from "angularfire2/storage";
import {FirestorageService} from "./firestorage.service";
import {DefaultPipe} from './default.pipe';
import {SettingsComponent} from './settings/settings.component';
import {FireDatabaseService} from "./fire-database.service";
import {AngularFireDatabaseModule} from "angularfire2/database";

const appRoutes: Routes =
    [
        {path: '', redirectTo: "/home", pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'auth', component: AuthComponent, canActivate: [AuthGuardService]},
        {path: 'team', component: TeamComponent, canActivate: [AuthGuardService]},
        {path: 'settings', component: SettingsComponent, canActivate: [AuthGuardService]}
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
        DefaultPipe,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatTabsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatSnackBarModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [AuthService, AuthGuardService, FirestorageService, FireDatabaseService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
