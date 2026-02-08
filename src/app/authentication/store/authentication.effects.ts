import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthenticationActions from './authentication.actions';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationEffects {
  NavigateToSignInPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthenticationActions.NavigateToSignInPage),
        tap(() => {
          return this.router.navigate(['/authentication/sign-in']);
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    public router: Router,
  ) {}
}
