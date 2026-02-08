import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthenticationState } from './authentication.reducer';

export const selectAuthenticationState =
  createFeatureSelector<AuthenticationState>('authentication');
