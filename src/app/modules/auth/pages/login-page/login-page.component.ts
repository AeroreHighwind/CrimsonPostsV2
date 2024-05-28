import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { BaseFormPage } from '../../../../core/classes/base-form-page.class';
import { FirestoreManager } from '../../../../core/classes/firestore-manager.class';
import { NotificationService } from '../../../../core/services/notification.service';
import { Router, RouterModule } from '@angular/router';
import { UserProfileModel } from '../../../../core/models/user-profile.model.class';
import { AuthService } from '../../services/auth.service';
import { UserLoginDto } from '../../interfaces/user.login.dto';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent extends BaseFormPage {

  private _auth = inject(AuthService);
  private _titleService = inject(Title);
  private _router = inject(Router);

  constructor(
    private _fb: FormBuilder,
    private _notifications: NotificationService,
    private _firestoreManager: FirestoreManager,
  ) {
    super(_fb, _notifications, _firestoreManager)
    this.modelClass = UserProfileModel
    this.formGroup = _fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
    this._titleService.setTitle("Login")
  }

  public override async submit(event: any): Promise<void> {
    if (this.formGroup.invalid) {
      this._notifications.errorNotification("Complete the required fields")
      return
    }
    try {
      const dto: UserLoginDto = this.formGroup.value
      const successLogin = await this._auth.login(dto)
      if (successLogin) this._router.navigateByUrl("/home")
    } catch (error) {
      this._notifications.errorNotification("Something went wrong...")
    }
  }
}
