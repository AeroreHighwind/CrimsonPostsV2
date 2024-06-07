import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, computed, inject } from '@angular/core';
import { MaterialModule } from '../../../../modules/material/material.module';
import { MatDrawer } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuConfiguration } from '../../../config/menu.config';
import { LayoutService } from '../../services/layout.service';
import { AuthService } from '../../../../modules/auth/services/auth.service';
import { MenuItem } from '../../../config/menu-item.interface';
import { Router } from '@angular/router';

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
  private _router = inject(Router)
  public isActive = this._layout.sidebarActive

  public menuItems = MenuConfiguration
  public enableNotifications: boolean = true
  public connectionStatus: boolean = true

  ngOnInit(): void {
    this._cdRef.detectChanges()
  }

  public toggle(): void {
    this.isActive.update((value) => !value)
    this._cdRef.detectChanges()
  }

  public handleClick(item: MenuItem) {
    if (item.action) return this.methodMatcher(item.action)
    if (item.url) return this.navigate(item.url)
  }

  public async logout() {
    await this._auth.logout()
    this._router.navigateByUrl('/auth')
  }


  get isOpen(): boolean {
    return this.sidebarRef.opened
  }
  private navigate(url: string) {
    if (!url) return;
    this._router.navigateByUrl(url)
  }
  private methodMatcher(methodName: string): any {
    if (methodName && (this as any)[methodName]) {
      return (this as any)[methodName]();
    }
    throw new Error(`Method ${methodName} does not exist in the component`);
  }
}

