import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {FirestorageService} from "../firestorage.service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy
{
    @ViewChild('progressBar') input: ElementRef;

    constructor(private authService: AuthService, private firestorageService: FirestorageService)
    {
    }

    ngOnDestroy(): void
    {
        this.firestorageService.uploadProgress = null;
        this.firestorageService.dlUrl = null;
    }

    ngOnInit()
    {
    }




}
