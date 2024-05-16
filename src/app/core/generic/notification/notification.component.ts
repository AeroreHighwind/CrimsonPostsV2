import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../../modules/material/material.module';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
