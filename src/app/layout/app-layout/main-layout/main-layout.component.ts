import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from '../../../shared/components-module';

@Component({
  selector: 'app-main-layout.component',
  standalone: true,
  imports: [SharedModule, RouterOutlet, ComponentsModule],
  templateUrl: './main-layout.component.html',
  styleUrl: '../../../pages/dashboard/dashboard.component.scss',
})
export class MainLayoutComponent {
  isSidebarCollapsed = false;

  // This function runs when the sidebar emits an event
  onSidebarToggle(collapsed: boolean) {
    this.isSidebarCollapsed = collapsed;
  }
}
