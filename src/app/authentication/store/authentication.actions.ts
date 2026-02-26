import { createAction, props } from '@ngrx/store';

export const NavigateToSignInPage = createAction(
    '[Authentication] Navigate To Sign In Page'
);
export const NavigateToDashboardPage = createAction(
    '[Authentication] Navigate To Dashboard Page'
);
