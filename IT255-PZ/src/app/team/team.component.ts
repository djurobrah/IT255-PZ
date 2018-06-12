import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {TeamMember} from "../team-member";
import {FireDatabaseService} from "../fire-database.service";

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    members: Observable<TeamMember[]>;

    constructor(private fireDatabase: FireDatabaseService) {

    }

    ngOnInit() {
        this.members = this.fireDatabase.getAllTeamMembers();
    }

}
