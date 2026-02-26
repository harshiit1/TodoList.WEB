import { NgModule } from '@angular/core';
import { Sidebar } from '../layout/sidebar/sidebar.component';
import { SharedHeader } from './shared-header/shared-header';

@NgModule({
  declarations: [],
  imports: [Sidebar, SharedHeader],
  exports: [Sidebar, SharedHeader],
})
export class ComponentsModule {}
