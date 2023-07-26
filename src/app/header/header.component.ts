import { Component } from '@angular/core';
import { UploadpostComponent } from '../uploadpost/uploadpost.component';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseStoreService } from '../services/firebase-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // You can add any necessary code here for handling logout or other functionalities
  // For the purpose of this example, we'll just log a message when the logout button is clicked.
  constructor(
    private dialog: MatDialog,
    private firebaseStorageService: FirebaseStoreService
  ) {}

  Openpopup() {
    this.dialog.open(UploadpostComponent, {
      width: '40%',
      data: {
        title: 'User Edit',
      },
    });
  }
  notificationCount: number = 3;
  onLogout(): void {
    // Perform your logout logic here
    // For this example, we'll just display a message in the console.
    console.log('Logged out successfully!');
  }
}
