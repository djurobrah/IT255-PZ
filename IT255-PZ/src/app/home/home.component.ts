import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
    purpleAmber = "#673AB7";
    info = [
        {
            title: 'About', icon: 'info',
            text: 'This system was designed to be integrated into any social platform...'
        },
        {
            title: 'Authorization & Authentication', icon: 'lock',
            text: 'This system uses Firebase Auth for authentication & authorization...'
        },
        {
            title: 'User data', icon: 'cloud_done',
            text: 'This system uses Firebase Cloud Firestore for storing valuable data...'
        },
        {
            title: 'Community', icon: 'people',
            text: 'This system was designed to put emphasis on each member...'
        },
        {
            title: 'Personalization', icon: 'settings',
            text: 'This system gives the user full control over their account...'
        },
    ];

    constructor()
    {
    }

    ngOnInit()
    {
    }

}
