import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/internal/Observable";
import {TeamMember} from "./team-member";

@Injectable()
export class FirestoreService
{
    teamMemberCollection: AngularFirestoreCollection<TeamMember>;

    constructor(private firestore: AngularFirestore)
    {
        this.teamMemberCollection = this.firestore.collection('team');
    }

    getAllTeamMembers(): Observable<TeamMember[]>
    {
        return this.teamMemberCollection.valueChanges();
    }

    addTeamMember(member: TeamMember)
    {
        return this.teamMemberCollection.add(JSON.parse(JSON.stringify(member)));
    }

}
