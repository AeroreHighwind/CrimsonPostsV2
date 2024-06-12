import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NotificationComponent } from '../generic/notification/notification.component';

declare type AlertType = 'success' | 'error' | 'warning' | 'info'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _snackBarConf: MatSnackBarConfig = {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    panelClass: ['custom-snackbar'],
  }

  private _alertIconMap: { [key in AlertType]: string } = {
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
    info: 'info'
  }
  constructor(private _snackBar: MatSnackBar) { }

  private triggerNotification(message: string, title: string, type: AlertType) {
    const icon = this._alertIconMap[type]
    this._snackBar.openFromComponent(NotificationComponent, {
      data: { title, message, type, icon },
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: type,
      duration: 2000
    });
  }
  public successNotification(message: string, title: string = 'Operation successful') {
    this.triggerNotification(message, title, 'success')
  }
  public errorNotification(message: string, title: string = 'An error ocurred') {
    this.triggerNotification(message, title, 'error')
  }
}

