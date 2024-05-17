import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { NotificationService } from './core/services/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // this._notifications.triggerNotification("test WITH A LONG TEXT TO SEE WHAT IT HAPPENS, IT SEEMS TO BE RESPONSIVE")
  }
  title = 'crimson-posts-v2';
  private _notifications = inject(NotificationService)

}
