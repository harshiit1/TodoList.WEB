import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as AuthenticationSelector from './authentication.selectors';
import * as AuthenticationActions from './authentication.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationFacade {
  navigateTosignIn() {
    this.store.dispatch(AuthenticationActions.NavigateToSignInPage());
  }
  navigateToDashboard() {
    this.store.dispatch(AuthenticationActions.NavigateToDashboardPage());
  }
  constructor(public store: Store) {}
}
