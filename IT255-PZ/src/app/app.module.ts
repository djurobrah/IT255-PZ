import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './log-reg/login/login.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { RegisterComponent } from './log-reg/register/register.component';

const appRoutes: Routes =
    [
        {path: '', redirectTo: "/home", pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'logReg', component: LogRegComponent}
    ]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        LogRegComponent,
        RegisterComponent
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
