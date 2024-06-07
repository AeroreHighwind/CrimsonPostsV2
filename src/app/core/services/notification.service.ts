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
  constructor(private _snackBar: MatSnackBar) { }

  //   triggerNotification(message: string,
  //     appearance: 'fill' | 'outline' | 'soft' = 'soft',
  //     type: 'info' | 'success' | 'error' = 'info', duration?: number,): void {

  //     const config: MatSnackBarConfig = {
  //       duration: duration,
  //       verticalPosition: 'top',
  //       horizontalPosition: 'right',
  //       panelClass: [`alert-type-${appearance}-${type}`]
  //     };
  //     this._snackBar.open(message, '', config);
  //   }


  private triggerNotification(message: string, title: string, type: AlertType) {
    this._snackBar.openFromComponent(NotificationComponent, {
      data: { title, message, type },
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

