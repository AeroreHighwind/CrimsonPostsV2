import { Component, ElementRef, ViewChild, computed, inject } from '@angular/core';
import { MaterialModule } from '../../../../modules/material/material.module';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('sidebar', { static: true }) sidebarRef!: MatDrawer
  public showFiller = false

  toggle() {
    this.sidebarRef.toggle()
  }
}
