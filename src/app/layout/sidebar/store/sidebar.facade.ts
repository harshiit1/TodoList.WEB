import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as SidebarSelectors from './sidebar.selectors';
import * as SidebarActions from './sidebar.actions';
@Injectable({
  providedIn: 'root',
})
export class SidebarFacade {
  activeMenu$ = this.store.pipe(select(SidebarSelectors.selectActiveMenu));

  navigateToTasksPage() {
    this.store.dispatch(SidebarActions.NavigateToTasksPage());
  }
  navigateToDashboardPage() {
    this.store.dispatch(SidebarActions.NavigateToDashboardPage());
  }
  selectMenu(name: string) {
    this.store.dispatch(SidebarActions.SetActiveMenu({ menuName: name }));
  }
  constructor(private store: Store) {}
}
