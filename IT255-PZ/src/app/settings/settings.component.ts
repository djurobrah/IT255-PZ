import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {FirestorageService} from "../firestorage.service";
import {FireDatabaseService} from "../fire-database.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy
{
    member: Observable<any>;

    constructor(public authService: AuthService,
                public firestorageService: FirestorageService,
                public fireDatabaseService: FireDatabaseService)
    {
        this.member = fireDatabaseService.getTeamMember(authService.displayName);
    }

    ngOnDestroy(): void
    {
        this.firestorageService.uploadProgress = null;
        this.firestorageService.dlUrl = null;
    }

    ngOnInit()
    {
    }

    deleteWholeUser(username: string)
    {
        this.firestorageService.deleteFile(username);
        this.fireDatabaseService.deleteTeamMember(username);
        this.authService.deleteUser();
    }



}
