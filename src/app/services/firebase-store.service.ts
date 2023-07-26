import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStoreService {
  constructor(private fireStorage: AngularFireStorage) {
    //...
  }

  public getImageUrl(imagePath: string): Observable<string | null> {
    const ref = this.fireStorage.ref(imagePath);
    return ref.getDownloadURL();
  }
}
