import { Injectable, signal } from '@angular/core';
import { User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userSignal = signal<User | null>(null);
  constructor() {
    this.userSignal.set({
      displayName: "Aerore Highwind",
      photoURL: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      // photoURL: "https://firebasestorage.googleapis.com/v0/b/crimson-posts.appspot.com/o/emi%20hasegawa_small.jpg?alt=media&token=f96dd737-f902-4453-9932-b862b412ecc6"
    } as User)
  }
}
