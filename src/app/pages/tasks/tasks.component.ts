import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { ComponentsModule } from '../../shared/components-module';

@Component({
  selector: 'app-tasks.component',
  standalone: true,
  imports: [SharedModule, ComponentsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

}
