import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { SidebarFacade } from './store/sidebar.facade';
import { SharedModule } from '../../shared/shared-module';
import { ComponentsModule } from '../../shared/components-module';

@Component({
  selector: 'app-sidebar-component',
  imports: [SharedModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class Sidebar {
  isSidebarCollapsed = false;
  @Output() collapseChanged = new EventEmitter<boolean>();

  constructor(
    private eRef: ElementRef,
    public sideBarFacade: SidebarFacade,
  ) {}

  toggleEvent(event: Event) {
    event.stopPropagation();
    this.isSidebarCollapsed = !this.isSidebarCollapsed; // Toggle local state
    this.collapseChanged.emit(this.isSidebarCollapsed);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.eRef.nativeElement.contains(event.target);

    // Logic for Mobile Click
    if (window.innerWidth < 768 && !clickedInside && this.isSidebarCollapsed) {
      this.isSidebarCollapsed = false;
    }
  }

  onTaskMenuClick() {
    this.sideBarFacade.selectMenu('task');
    this.sideBarFacade.navigateToTasksPage();
  }
  onDashboardMenuClick() {
    this.sideBarFacade.selectMenu('dashboard');
    this.sideBarFacade.navigateToDashboardPage();
  }
}
