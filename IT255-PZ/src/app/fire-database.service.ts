import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {TeamMember} from "./team-member";
import {Observable} from "rxjs/Observable";
import {MatSnackBar} from "@angular/material";
import {t} from "@angular/core/src/render3";

@Injectable()
export class FireDatabaseService {

    teamMembers = this.db.list<TeamMember>('team');

    constructor(private db: AngularFireDatabase, private snackBar: MatSnackBar) {
    }

    getAllTeamMembers(): Observable<TeamMember[]> {
        return this.teamMembers.valueChanges();
    }

    tryAddTeamMember(member: TeamMember) {
        this.addTeamMember(member)
            .then(res => {
                this.openSnackBar(res, "CLOSE");
            }, err => {
                this.openSnackBar(err, "CLOSE");
            })
    }


    addTeamMember(member: TeamMember) {

        return new Promise<any>((resolve, reject) => {
            this.db.object("team/" + member.username).update({
                    email: member.email,
                    joined: member.joined
                }
            ).then(res => {
                    resolve(res);
                },
                err => reject(err))
        })
    }

    openSnackBar(message
                     :
                     string, action
                     :
                     string
    ) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}