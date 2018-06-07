import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {FirestoreService} from "../firestore.service";
import {TeamMember} from "../team-member";

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit
{

    members: Observable<TeamMember[]>;

    constructor(private firestore: FirestoreService)
    {
    }

    ngOnInit()
    {
        this.members = this.firestore.getAllTeamMembers();
    }

}
