import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as SidebarActions from './sidebar.actions';
import { map, tap } from 'rxjs';
@Injectable()
export class SidebarEffects {
  NavigateToTasksPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SidebarActions.NavigateToTasksPage),
        tap(() => {
          this.router.navigate(['/todo-app/tasks']);
        }),
      ),
    { dispatch: false },
  );
  NavigateToDashboardPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SidebarActions.NavigateToDashboardPage),
        tap(() => {
          this.router.navigate(['/todo-app/dashboard']);
        }),
      ),
    { dispatch: false },
  );
  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router,
  ) {}
}
