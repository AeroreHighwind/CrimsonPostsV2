import { Injectable, signal } from '@angular/core';
import { User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSignal = signal<User | null>(null);
  constructor() {
    this.userSignal.set({
      displayName: "Aerore Highwind",
      photoURL: "https://firebasestorage.googleapis.com/v0/b/crimson-posts.appspot.com/o/profile.jpeg?alt=media&token=f9262f1c-1dc4-4038-9356-9455adce8cd7"
    } as User)
  }
}
