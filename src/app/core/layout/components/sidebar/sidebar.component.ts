import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, computed, inject } from '@angular/core';
import { MaterialModule } from '../../../../modules/material/material.module';
import { MatDrawer } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuConfiguration } from '../../../config/menu.config';
import { LayoutService } from '../../services/layout.service';
import { AuthService } from '../../../../modules/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar', { static: true }) sidebarRef!: MatDrawer
  private _layout = inject(LayoutService)
  private _cdRef = inject(ChangeDetectorRef)
  private _auth = inject(AuthService)
  public isActive = this._layout.sidebarActive

  public menuItems = MenuConfiguration
  public enableNotifications: boolean = true
  public connectionStatus: boolean = true

  ngOnInit(): void {
    this._cdRef.detectChanges()
  }

  toggle(): void {
    this.isActive.update((value) => !value)
    this._cdRef.detectChanges()
  }

  public logout(): void {
    this._auth.logout()
  }


  get isOpen(): boolean {
    return this.sidebarRef.opened
  }

}
