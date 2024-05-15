import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public showSpinner = signal<boolean>(false)

  public toggleSpinner(): void {
    this.showSpinner.update((value) => !value)
  }
}
