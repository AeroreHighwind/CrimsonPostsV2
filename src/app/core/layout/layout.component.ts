import { Component } from '@angular/core';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent, FooterComponent, SidebarComponent, RouterModule],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {

}
