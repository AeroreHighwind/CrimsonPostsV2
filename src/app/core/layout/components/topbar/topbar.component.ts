import { Component, computed, inject } from '@angular/core';
import { MaterialModule } from '../../../../modules/material/material.module';
import { AuthService } from '../../../../modules/auth/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  private _auth = inject(AuthService)

  public currentUser = computed(() => this._auth.userSignal())

}
