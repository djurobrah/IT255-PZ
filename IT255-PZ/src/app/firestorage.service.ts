import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {finalize, map} from "rxjs/operators";
import {AngularFireStorage} from "angularfire2/storage";

@Injectable()
export class FirestorageService
{

    dlUrl: Observable<string>;
    uploadProgress: Observable<number>;

    constructor(private storage: AngularFireStorage)
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


}
