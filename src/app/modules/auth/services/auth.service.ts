import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { UserInfo } from '@angular/fire/auth';
import { NotificationService } from '../../../core/services/notification.service';
import { UserRegisterDto } from '../interfaces/user.register.dto';
import { UserLoginDto } from '../interfaces/user.login.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userSignal = signal<UserInfo | null>(null);
  private _firebaseAuthService = inject(AngularFireAuth);
  private _notifications = inject(NotificationService)

  constructor() {
    this._firebaseAuthService.authState.subscribe((user) => {
      if (user) {
        this._userSignal.set(user)
      }
    })

  }

  // sign-up with email and password
  public async register(user: UserRegisterDto) {
    try {
      const { email, password } = user;
      await this._firebaseAuthService.createUserWithEmailAndPassword(email, password)
      this._notifications.successNotification("Register successful")
    } catch (error) {
      this._notifications.errorNotification("Register failed")
    }
  }
  // Login with email and password
  public async login(user: UserLoginDto): Promise<boolean> {
    const { email, password } = user;

    try {
      const userCredential = await this._firebaseAuthService.signInWithEmailAndPassword(email, password);
      if (userCredential.user) {
        this._userSignal.set(userCredential.user);
      }

      this.observeUserState();
      return true;

    } catch (error) {
      this._notifications.errorNotification("Login failed");
      return false;
    }
  }

  // public async login(user: UserLoginDto) {
  //   const { email, password } = user;
  //   return this._firebaseAuthService.signInWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       if (userCredential.user) {
  //         this._userSignal.set(userCredential.user)
  //       }
  //       this.observeUserState()
  //       return true;
  //     })
  //     .catch((error) => {
  //       this._notifications.errorNotification(error)
  //       return false
  //     })
  // }

  public async logout(): Promise<void> {
    try {
      await this._firebaseAuthService.signOut()
      this._userSignal.set(null)
    } catch (error) {
      this._notifications.errorNotification("Error in sign out")
    }
  }


  public observeUserState(): void {
    this._firebaseAuthService.authState.subscribe()
    // this._firebaseAuthService.authState.subscribe(() => {
    //   this._router.navigateByUrl("/posts")
    // })
  }

  get userSignal(): Signal<UserInfo | null> {
    return computed(() => this._userSignal())
  }

  // constructor() {
  // this.userSignal.set(null)
  // this.userSignal.set({
  //   displayName: "Aerore Highwind",
  //   photoURL: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
  //   // photoURL: "https://firebasestorage.googleapis.com/v0/b/crimson-posts.appspot.com/o/emi%20hasegawa_small.jpg?alt=media&token=f96dd737-f902-4453-9932-b862b412ecc6"
  // } as User)
  // }
}
