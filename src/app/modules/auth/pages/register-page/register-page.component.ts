import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { BaseFormPage } from '../../../../core/classes/base-form-page.class';
import { NotificationService } from '../../../../core/services/notification.service';
import { AuthService } from '../../services/auth.service';
import { UserRegisterDto } from '../../interfaces/user.register.dto';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  private _auth = inject(AuthService)
  public group: FormGroup
  public optionalGroup: FormGroup
  public matcher = new ErrorStateMatcher()

  constructor(private _fb: FormBuilder, private _notifications: NotificationService) {

    this.group = _fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      password1: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    })

    this.optionalGroup = _fb.group({
      img: ["",],
      location: [""],
      phone: [""]
    })
  }

  public async submit() {
    if (this.group.invalid || this.optionalGroup.invalid) return
    const formData = this.group.value
    const registerData: UserRegisterDto = {
      username: formData.username,
      password: formData.password,
      email: formData.email
    }
    await this._auth.register(registerData)
  }
}
