import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {finalize, map} from "rxjs/operators";
import {AngularFireStorage} from "angularfire2/storage";

@Injectable()
export class FirestorageService
{

    dlUrl: Observable<string>;
    uploadProgress: Observable<number>;

    constructor(public storage: AngularFireStorage)
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
                this.dlUrl = ref.getDownloadURL();
            })
        ).subscribe()
    }



    // uploadFile(username: string, event) {
    //     const file = event.target.files[0];
    //     const filePath = username;
    //     const fileRef = this.storage.ref(filePath);
    //     const task = this.storage.upload(filePath, file);
    //
    //     // observe percentage changes
    //     this.uploadPercent = task.percentageChanges();
    //     // get notified when the download URL is available
    //     task.snapshotChanges().pipe(
    //         finalize(() => this.downloadURL = fileRef.getDownloadURL() )
    //     )
    //         .subscribe()
    // }

    getProfilePicture()
    {
        return this.storage.ref("nopicture.png").getDownloadURL();
    }


}
