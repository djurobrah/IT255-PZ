import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/internal/Observable";

interface TeamMember
{
    name: string;
    bio: string;
}

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    memberCollection: AngularFirestoreCollection<TeamMember>;
    members: Observable<TeamMember[]>;

    constructor(private afs: AngularFirestore) {
    }

    ngOnInit() {
        this.memberCollection = this.afs.collection('team');
        this.members = this.memberCollection.valueChanges();
    }

}
