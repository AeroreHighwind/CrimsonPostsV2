import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { NotificationService } from './core/services/notification.service';
import { FirestoreManager } from './core/classes/firestore-manager.class';
import { UserProfileModel } from './core/models/user-profile.model.class';
import { UserProfile } from 'firebase/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private firestore = new FirestoreManager()
  ngOnInit(): void {
    const profile: UserProfileModel = { displayName: "test", img: "", userId: 1 }
    this.firestore.create<UserProfile>(UserProfileModel, profile)
  }
  // this._notifications.triggerNotification("test WITH A LONG TEXT TO SEE WHAT IT HAPPENS, IT SEEMS TO BE RESPONSIVE")

  title = 'crimson-posts-v2';
  private _notifications = inject(NotificationService)
}



