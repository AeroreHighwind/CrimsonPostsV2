import { Component, Signal, computed, inject, signal } from '@angular/core';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from '../utils/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from './services/layout.service';
import { AuthService } from '../../modules/auth/services/auth.service';
import { User, UserInfo } from '@angular/fire/auth';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, TopbarComponent, FooterComponent, SidebarComponent, SpinnerComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  private _layoutService = inject(LayoutService)
  private _auth = inject(AuthService)
  public sidebarActive: Signal<boolean> = computed(() => this._layoutService.sidebarActive())
  public isAuthenticated: Signal<UserInfo | null> = computed(() => this._auth.userSignal())

}
