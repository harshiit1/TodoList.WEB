import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { ComponentsModule } from '../../shared/components-module';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule, ComponentsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
