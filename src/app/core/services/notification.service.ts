import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _snackBarConf: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'end',
    verticalPosition: 'top',
    panelClass: ['custom-snackbar']
  }
  constructor(private _snackBar: MatSnackBar) { }

  triggerNotification(title: string, action?: string, aditionalConfig?: MatSnackBarConfig) {
    this._snackBar.open(title, action, {
      ...this._snackBarConf, ...aditionalConfig
    });
  }
}
