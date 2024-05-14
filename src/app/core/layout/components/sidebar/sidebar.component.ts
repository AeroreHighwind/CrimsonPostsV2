import { Component, ElementRef, OnInit, ViewChild, computed, inject } from '@angular/core';
import { MaterialModule } from '../../../../modules/material/material.module';
import { MatDrawer } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuConfiguration } from '../../../config/menu.config';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar', { static: true }) sidebarRef!: MatDrawer

  public menuItems = MenuConfiguration
  public enableNotifications: boolean = true
  public connectionStatus: boolean = true

  ngOnInit(): void {
    this.toggle()
  }

  toggle() {
    this.sidebarRef.toggle()
  }
}
