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
                console.log(res);
                //this.openSnackBar(res, "CLOSE");
            }, err => {
                console.log(err);
                //this.openSnackBar(err, "CLOSE");
            })
    }

    addTeamMember(member: TeamMember) {

        return new Promise<any>((resolve, reject) => {
            this.db.object("team/" + member.username).update({
                    username: member.username,
                    email: member.email,
                    joined: member.joined,
                    pictureURL: member.pictureURL
                }
            ).then(res => {
                    resolve(res);
                },
                err => reject(err))
        })
    }

    getTeamMember(username: string)
    {
        return this.db.object("team/" + username).valueChanges();
    }

    updateTeamMemberPictureURL(username: string, url)
    {
        this.db.object("team/" + username).update(
            {
                pictureURL: url
            })
    }

    deleteTeamMember(username: string)
    {
        this.db.object("team/" + username).remove();
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}