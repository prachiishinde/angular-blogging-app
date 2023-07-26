import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BlogpostComponent } from '../blogpost/blogpost.component';

@Component({
  selector: 'app-uploadpost',
  templateUrl: './uploadpost.component.html',
  styleUrls: ['./uploadpost.component.css']
})

export class UploadpostComponent implements OnInit {
    inputdata: any;
    url: any;
    imageURL: string | null = null;
   
    constructor(
      @Inject(MAT_DIALOG_DATA) public data:any,
      private fireStorage:AngularFireStorage, 
      private firestore: AngularFireStorage,
      private ref:MatDialogRef<UploadpostComponent>,
      ){} 

  //   async onFileChange(event:any){
  //     const file = event.target.files[0]
  //     if(file){
  //      const path = `yt/${file.name}`
  //      const uploadTask = await this.fireStorage.upload(path,file)
  //      const url = await uploadTask.ref.getDownloadURL()
  //      console.log(url)
  //     }
  //  }
    async onFileChange(event:any){
      const file = event.target.files[0]
      if(file){
      const path = `yt/${file.name}`
      const uploadTask = await this.fireStorage.upload(path,file)
      const url = await uploadTask.ref.getDownloadURL()
      this.imageURL = url;
      // this.firestore.collection("images").add({image: url});

      console.log(url)
    }

    }
    
    async retrieveDownloadURL(filePath: string): Promise<string | null> {
      try {
        const ref = this.fireStorage.ref(filePath);
        return await ref.getDownloadURL().toPromise();
      } catch (error) {
        console.error('Error retrieving download URL:', error);
        return null;
      }
    }
    
    postImage() {
      if (this.imageURL) {
        // Use the saved URL in the postImage function
        this.inputdata.url = this.imageURL;
      } else {
        console.error('Image URL not available.');
      }
    }

    ngOnInit(): void{
       this.inputdata= this.data;
    }
    
    closepopup(){
      this.ref.close(); 
    } 

  
}

