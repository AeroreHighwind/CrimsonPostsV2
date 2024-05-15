import { Component } from '@angular/core';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from '../utils/spinner/spinner.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent, FooterComponent, SidebarComponent, SpinnerComponent],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {

}
