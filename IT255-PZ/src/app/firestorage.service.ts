import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {finalize, map} from "rxjs/operators";
import {AngularFireStorage} from "angularfire2/storage";
import {FireDatabaseService} from "./fire-database.service";

@Injectable()
export class FirestorageService
{

    dlUrl: Observable<string>;
    uploadProgress: Observable<number>;

    constructor(private storage: AngularFireStorage, private databaseService: FireDatabaseService)
    {
    }

    uploadFile(username, event)
    {
        const ref = this.storage.ref(username);
        const task = ref.put(event.target.files[0]);
        this.uploadProgress = task.percentageChanges();
        task.snapshotChanges().pipe(
            finalize(() =>
            {
                ref.getDownloadURL().subscribe((downloadUrl)=>
                {
                    this.dlUrl = downloadUrl;
                    this.databaseService.updateTeamMemberPictureURL(username, this.dlUrl);
                });
            })
        ).subscribe();
    }

    deleteFile(username: string)
    {
        this.storage.ref(username).delete();
    }
}
