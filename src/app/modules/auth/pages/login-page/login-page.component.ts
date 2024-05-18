import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { BaseFormPage } from '../../../../core/classes/base-form-page.class';
import { FirestoreManager } from '../../../../core/classes/firestore-manager.class';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent extends BaseFormPage {
  public group: FormGroup
  constructor(
    private _fb: FormBuilder,
    private _notifications: NotificationService,
    private _firestoreManager: FirestoreManager
  ) {
    super(_fb, _notifications, _firestoreManager)
    this.group = _fb.group({
      email: [''],
      password: [''],
    })
  }
}
